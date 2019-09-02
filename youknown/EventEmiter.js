class EventEmitter {
  constructor() {
    this._events = Object.create(null)
  }
  on(type, listener) {
    if (this._events[type]) {
      this._events.push(listener)
    } else {
      this._events[type] = [listener]
    }
  }
  once(type, listener) {
    const only = (...args) => {
      listener.apply(this, args);
      this.off(type, only);
    }
    only.origin = listener;
    this.on(type, only);
  }
  off(type, listener) {
    if (!this._events[type]) return;
    if (listener) {
      this._events[type] = this._events[type].filter(fn => {
        return fn !== listener && fn.origin !== listener;
      })
    } else {
      delete this._events[type];
    }
  }
  emit(type, ...args) {
    if (!this._events[type]) return;
    this._events[type].forEach(fn => {
      fn.call(this, ...args);
    });
  }
}

// test
const emitter = new EventEmitter();

const aaa = (args) => console.log(`只执行一次 ${args} ${this}`);
const bbb = (args) => console.log(`listener ${args} ${this}`);

emitter.once('click', aaa);
// emitter.off('click', aaa);
emitter.emit('click')