// https://www.codewars.com/kata/59ca8e8e1a68b7de740001f4

/* Given two arrays of strings, return the number of times each string of the second array appears in the first array.

Example
array1 = ['abc', 'abc', 'xyz', 'cde', 'uvw']
array2 = ['abc', 'cde', 'uap']
How many times do the elements in array2 appear in array1?

'abc' appears twice in the first array (2)
'cde' appears only once (1)
'uap' does not appear in the first array (0)
Therefore, solve(array1, array2) = [2, 1, 0]

*/

function solve(a,b){
  let arr = [];
  for (var idx = 0; idx < b.length; idx++){
    var count = 0;
    a.forEach((v) => (v === b[idx] && count++));
    arr.push(count);
  }
  return arr;
}
