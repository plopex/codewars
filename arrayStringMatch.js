function solve(a,b){
  let arr = [];
  for (var idx = 0; idx < b.length; idx++){
    var count = 0;
    a.forEach((v) => (v === b[idx] && count++));
    arr.push(count);
  }
  return arr;
}
