// 同步加载common.css
import './styles/common.css'
// 同步加载module1.js
import './module1/module1'
// 不同加载第三方库
import './vendor/vendor'

// 异步加载
window.onload = function() {
  // 异步加载module2
  import(/* webpackChunkName: 'module2' */ './module2/module2').then(() => {
    console.log('异步加载module2成功')
  })

  // 
  import(/* webpackChunkName: 'async-style' */ './styles/async-style.css').then(() => {
    console.log('异步加载async-style.css成功')
  })
}