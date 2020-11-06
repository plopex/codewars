function squareSum(numbers){
  let sums = 0;
  let i = 0;
  while (i<numbers.length){
    let val = Math.pow(numbers[i], 2);
    sums = sums + val;
    i++;
  }
  return sums;
}
