// 笔记

// 1. 工厂模式
function createPerson(name) {
    var o = new Object();
    o.name = name;
    o.getName = function () {
        console.log(this.name);
    };

    return o;
}

// 2. 构造函数模式
function Person(name) {
    this.name = name;
    this.getName = function () {
        console.log(this.name);
    };
}
// 2.1 构造函数模式优化

// 3. 原型模式
function Person(name) {}

Person.prototype.name = 'keivn';
Person.prototype.getName = function () {
    console.log(this.name);
};

// 3.1 原型模式优化
function Person(name) {}

Person.prototype = {
    constructor: Person,
    name: 'kevin',
    getName: function () {
        console.log(this.name);
    }
};


// 4. 组合模式
function Person(name) {
    this.name = name;
}

Person.prototype = {
    constructor: Person,
    getName: function () {
        console.log(this.name);
    }
};

// 4.1 动态原型模式
function Person(name) {
    this.name = name;
    if (typeof this.getName != "function") {
        Person.prototype.getName = function () {
            console.log(this.name);
        }
    }
}
// 5.1 寄生构造函数模式

// 5.2 稳妥构造函数模式
// 所谓稳妥对象，指的是没有公共属性，而且其方法也不引用 this 的对象。
function person(name){
    var o = new Object();
    o.sayName = function(){
        console.log(name);
    };
    return o;
}