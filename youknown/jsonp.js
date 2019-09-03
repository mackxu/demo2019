const jsonp = function(url, data, callback) {
  if (typeof data === 'function') {
    callback = data;
    data = {}
  }
  let $script = null;
  // 1. 创建回调函数名词,并做为callback值
  const cbFunctionName = `cb_jsonp_${Math.random().toString().replace('.', '')}`;
  data.callback = cbFunctionName;
  // 2. 在全局变量上挂载回调函数
  window[cbFunctionName] = (res) => {
    callback(res);
    document.body.removeChild($script);
  }
  // 3. 将data数据转化为url查询字符串

  // 4. 创建一个script标签并插入到页面中, url为src的值

  
}