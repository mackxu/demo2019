// 数组乱序

// 借助sort,不是很准确
function shuffle(arr) {
  return arr.concat().sort(function() {
    return Math.random() - 0.5
  })
}

// Fisher–Yates 算法
function shuffle(arr) {
  for (let i = arr.length; i > 0; i--) {
    // [0, i)
    let randomIndex = Math.floor(Math.random() * i);
    [arr[i - 1], arr[randomIndex]] = [arr[randomIndex], arr[i - 1]];
  }
  return arr;
}

console.log(shuffle([1,2,3,4]))