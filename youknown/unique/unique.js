// 在这个方法中，我们使用循环嵌套，
// 最外层循环 array，里面循环 res，
// 如果 array[i] 的值跟 res[j] 的值相等，就跳出循环，
// 如果都不等于，说明元素是唯一的，这时候 j 的值就会等于 res 的长度，
// 根据这个特点进行判断，将值添加进 res。
function unique1(arr) {
  if (arr.length < 2) return arr;
  const res = [];
  for (let i = 0; i < arr.length; i++) {
    let item = arr[i];
    for (let j = 0; j < res.length; j++) {
      if (item === res[j]) break;
    }
    if (j === res.length) {
      res.push(item);
    }
  }
  return res;
}

// sort排序后去重
function unique(arr) {
  const res = [];
  const sortedArr = arr.concat().sort();
  let seen;
  for (let i = 0; i < sortedArr.length; i++) {
    let item = sortedArr[i];
    if (!i || seen !== item) {
      // 第一个元素 或 相邻不相同的元素
      res.push(item)
    }
    seen = item;
  }
  return res;
}

// indexOf 简化内层循环

// filter简化外层循环

// Object 键值对 hasOwnProperty

// Object 键值对优化 typeof + JSON.stringify

// 利用Set
Array.from(new Set(array))
[...new Set(array)]

// 利用Map 简化内层循环 map.has() / map.set()
