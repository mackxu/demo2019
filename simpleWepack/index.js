const fs = require('fs')
const path = require('path')
const babylon = require('babylon')
const traverse = require('babel-traverse').default
const { transformFromAst } = require('babel-core')

let ID = 0;

function createAsset(filename) {
  const content = fs.readFileSync(filename, 'utf-8')
  // 转成抽象语法树
  const ast = babylon.parse(content, {
    sourceType: 'module',
  });
  const dependencies = [];
  // 提取当前文件中的依赖
  traverse(ast, {
    ImportDeclaration: ({node}) => {
      // import from xxxx 中的地址
      dependencies.push(node.source.value)
    },
  })
  const id = ID++;
  // 把代码从AST转成CommenJS的代码
  const {code} = transformFromAst(ast, null, {
    presets: ['env']
  });
  const customCode = loader(filename, code)

  return {
    id,
    filename,
    dependencies,
    code: customCode,
  }
}

function loader(filename, code) {
  if (/entry/.test(filename)) {
    console.log('this is loader')
  }
  return code;
}

function createGraph(entry) {
  const mainAsset = createAsset(entry);
  const queue = [mainAsset];
  for (const asset of queue) {
    asset.mapping = {};
    const dirname = path.dirname(asset.filename);
    asset.dependencies.forEach(relativePath => {
      const depPath = path.join(dirname, relativePath)
      const child = createAsset(depPath);
      asset.mapping[relativePath] = child.id;
      queue.push(child)
    })
  }
  return queue;
}

// mod { id, code, mapping }
function bundle(graph) {
  const modules = graph.map(mod => {
    return `${mod.id}: [
      function(require, module, exports) { ${mod.code} },
      ${JSON.stringify(mod.mapping)}
    ],`;
  }).join('');
  const result = `
    (function(modules) {
      function require(id) {
        const [ fn, mapping ] = modules[id];

        function localRequire(name) {
          return require(mapping[name])
        }

        const module = { exports: {} };

        fn(localRequire, module, module.exports)
        return module.exports;
      }
      require(0)
    })({${modules}})
  `;
  return result;
}

const graph = createGraph('./test/entry.js')
// const graph = [ 
//   { id: 0,
//     filename: './example/entry.js',
//     dependencies: [ './message.js' ],
//     code: '"use strict";\n\nvar _message = require("./message.js");\n\nvar _message2 = _interopRequireDefault(_message);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nconsole.log(_message2.default);',
//     mapping: { './message.js': 1 } },

//   { id: 1,
//     filename: 'example/message.js',
//     dependencies: [ './name.js' ],
//     code: '"use strict";\n\nObject.defineProperty(exports, "__esModule", {\n  value: true\n});\n\nvar _name = require("./name.js");\n\nexports.default = "hello " + _name.name + "!";',
//     mapping: { './name.js': 2 } },

//   { id: 2,
//     filename: 'example/name.js',
//     dependencies: [],
//     code: '"use strict";\n\nObject.defineProperty(exports, "__esModule", {\n  value: true\n});\nvar name = exports.name = \'world\';',
//     mapping: {} } 
  
// ];
const result = bundle(graph)

console.log(result);