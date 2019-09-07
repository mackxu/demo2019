// 笔记

// 1. 原型链继承
function Parent () {
    this.name = 'kevin';
}

Parent.prototype.getName = function () {
    console.log(this.name);
}

function Child () {

}

Child.prototype = new Parent();

// 2. 构造函数继承
function Parent () {
    this.names = ['kevin', 'daisy'];
}

function Child () {
    Parent.call(this);
}

// 3. 组合继承
function Parent (name) {
    this.name = name;
    this.colors = ['red', 'blue', 'green'];
}

Parent.prototype.getName = function () {
    console.log(this.name)
}

function Child (name, age) {
	// 1. 调用父构造函数
    Parent.call(this, name);
    this.age = age;
}
// 2. 调用父构造函数
Child.prototype = new Parent();

// 4. 原型式继承
var person = {
    name: 'kevin',
    friends: ['daisy', 'kelly']
}
var person1 = Object.create(person)

// 5. 寄生式继承
function createObj (o) {
    var clone = Object.create(o);
    clone.sayName = function () {
        console.log('hi');
    }
    return clone;
}
// 6. 寄生组合式继承
function prototype(child, parent) {
    var prototype = Object.create(parent.prototype);
    prototype.constructor = child;
    child.prototype = prototype;
}

function Parent (name) {
    this.name = name;
    this.colors = ['red', 'blue', 'green'];
}

Parent.prototype.getName = function () {
    console.log(this.name)
}

function Child (name, age) {
    Parent.call(this, name);
    this.age = age;
}

prototype(Child, Parent)
