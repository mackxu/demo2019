// 有定时器的
function throttle(fn, wait) {
  let timerId;

  return function(...args) {
    const context = this;

    if (timerId) return;
    timerId = setTimeout(function() {
      timerId = null;
      fn.apply(context, args);
    }, wait);
  }
}

// 首先执行
function throttle(fn, wait) {
  let previous = 0;

  return function(...args) {
    const now = Date.now();
    if (now - previous > wait) {
      previous = now;
      fn.apply(this, args)
    }
  }
}

function throttle(fn, wait, options = {}) {
  let previous = 0;
  let timerId;
  const { leading, trailing } = options

  return function(...args) {
    const context = this
    const now = Date.now()
    if (!previous && leading === false) previous = now
    const remaining = wait - (now - previous);

    if (remaining <= 0) {
      previous = now;
      fn.apply(context, args)
    } else if (!timerId && trailing !== false) {
      timerId = setTimeout(function() {
        previous = leading === false ? 0 : Date.now();
        timerId = null;
        fn.apply(context, args)
      }, remaining)
    }
  }
}




