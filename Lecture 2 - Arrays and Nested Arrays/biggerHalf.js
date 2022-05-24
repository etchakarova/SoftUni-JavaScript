function biggerHalf(arr) {
    let sorted = arr.sort((a, b) => a - b);
    let mid = Math.floor(sorted.length / 2);
   return arr.splice(mid, arr.length)
}
biggerHalf([4, 7, 2, 5]);
biggerHalf([3, 19, 14, 7, 2, 19, 6]);