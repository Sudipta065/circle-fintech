const arr = [2, 1, 3, 1, 5, 6, 7, 8, 11, 40, 7];

const pair = (arr) => arr.filter((item, index) => arr.indexOf(item) != index);

console.log(pair(arr));
