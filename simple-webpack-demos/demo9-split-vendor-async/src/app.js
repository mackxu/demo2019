import { sayHello1, sayHello2, sayHello3 } from './module';

sayHello1();
sayHello2();
sayHello3();

import(/* webpackChunkName: "module1" */'./module1').then((module) => {
  console.log(module.data)
});

import(/* webpackChunkName: "module2" */'./module2').then((module) => {
  console.log(module.data)
});

// 引用第三方库
import _ from 'lodash'
import axios from 'axios'

console.log(_, axios);