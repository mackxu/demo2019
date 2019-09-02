/**
 * 防抖的原理就是：你尽管触发事件，但是我一定在事件触发 n 秒后才执行，
 * 如果你在一个事件触发的 n 秒内又触发了这个事件，
 * 那我就以新的事件的时间为准，n 秒后才执行
 */

function debounce1(fn, wait) {
  let timerId;
  return function(...args) {
    const context = this;

    clearTimeout(timerId);
    timerId = setTimeout(function() {
      fn.apply(context, args)
    }, wait)
  }
}

// 我不希望非要等到事件停止触发后才执行，
// 我希望立刻执行函数，然后等到停止触发 n 秒后，才可以重新触发执行。
function debounce2(fn, wait, immediate) {
  let timerId;
  return function(...args) {
    const context = this;

    if (timerId) clearTimeout(timerId);

    if (immediate) {
      const callnow = !timerId;
      timerId = setTimeout(function() {
        timerId = null;
      }, wait)
      if (callnow) {
        // 还能有返回值
        return fn.apply(context, args);
      }
    } else {
      timerId = setTimeout(function() {
        fn.apply(context, args)
      }, wait)
    }
  }
}

// 带有取消的完整版
function debounce(fn, wait, immediate) {
  let timerId;

  const debounced = function(...args) {
    const context = this;

    if (timerId) clearTimeout(timerId);

    if (immediate) {
      const callnow = !timerId;
      timerId = setTimeout(function() {
        timerId = null;
      }, wait)
      if (callnow) {
        // 还能有返回值
        return fn.apply(context, args);
      }
    } else {
      timerId = setTimeout(function() {
        fn.apply(context, args)
      }, wait)
    }
  }

  debounced.cancel = function() {
    clearTimeout(timerId);
    timerId = null;
  }
  return debounced;
}

