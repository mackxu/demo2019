// 模拟实现call
Function.prototype.myCall = function(context = window, ...args) {
  // 用于防止 Function.prototype.myCall() 直接调用
  if (this === Function.prototype) return undefined;
  const fn = Symbol();
  context[fn] = this;
  const result = context[fn](...args);
  delete context[fn];
  return result;
}

// 模拟实现apply
Function.prototype.myApply = function(context = window, args) {
  if (this === Function.prototype) return undefined;
  const fn = Symbol();
  context[fn] = this;
  let result;
  if (Array.isArray(args)) {
    result = context[fn](...args);
  } else {
    result = context[fn]();
  }
  delete context[fn];
  return result;
}

// 模拟实现bind
Function.prototype.myBind = function(context = window, ...args1) {
  if (this === Function.prototype) throw new TypeError('Error')
  const that = this;
  return function F(...args2) {
    // 判断是否用于构造函数
    if (this instanceof F) {
      return new that(...args1, ...args2)
    }
    return that.apply(context, [...args1, ...args2])
  }
}
