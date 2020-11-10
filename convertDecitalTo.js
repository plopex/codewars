// https://www.codewars.com/kata/583ade15666df5a64e000058

/* This kata is about converting numbers to their binary or hexadecimal representation:

If a number is even, convert it to binary.
If a number is odd, convert it to hex.

*/

function evensAndOdds(a){
  if (a % 2 = 0){
    return a.toString(2);
  } else {
    return a.toString(16);
  }
}
