import { module1 } from './module1';
console.log(module1)

setTimeout(async () => {
  const module2 = await import(/* webpackChunkName: "module2" */'./module2');
  console.log(module2.module2)
})
setTimeout(async () => {
  const module3 = await import(/* webpackChunkName: "module3" */'./module3');
  console.log(module3.module3)
})