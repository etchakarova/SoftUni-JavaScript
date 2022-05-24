function largestNumber(a, b, c) {
  if (a > b && a > c) {
    console.log(`The largest number is ${a}.`);
  } else if (c > a && c > b) {
    console.log(`The largest number is ${c}.`);
  } else {
    console.log(`The largest number is ${b}.`);
  }
}
largestNumber(500, 34, 16);
