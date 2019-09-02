import { module1 } from './module1';
import { module2 } from './module2';

console.log(module1)
console.log(module2)

setTimeout(async () => {
  const module3 = await import(/* webpackChunkName: "module3" */'./module3');
  console.log(module3.module3)
})