// https://www.codewars.com/kata/534d2f5b5371ecf8d2000a08/train/javascript

/*
Your task, is to create NxN multiplication table, of size provided in parameter.

for example, when given size is 3:

1 2 3
2 4 6
3 6 9
for given example, the return value should be: [[1,2,3],[2,4,6],[3,6,9]]
*/

multiplicationTable = function(size) {
  let arr = [];
  for (var i=0;i<size;i++){
    arr[i] = [];
    for (var j=0;j<size;j++){
      arr[i][j] = (i+1) * (j+1);
    }
  }
  return arr;
}
