function lastKNumbersSequence(n, k) {
    let arr = [1];

    for (let i = 1; i < n; i++) {

        arr[i] = sumLastK(arr, k);

    }

    function sumLastK(array = arr, k) {

        k = array.length > k ? k : array.length;

        let sum = 0;

        for (let i = 1; i <= k; i++) {

            sum += array[array.length - i];
        }
        return sum;
    }
    return arr;
}
console.log(lastKNumbersSequence(6, 3));
console.log(lastKNumbersSequence(8, 2));