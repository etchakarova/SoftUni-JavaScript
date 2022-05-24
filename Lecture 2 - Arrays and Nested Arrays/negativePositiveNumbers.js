function negativePositiveNumbers(arr) {
    let newArr = [];
    for (element of arr) {
        if (element >= 0) {
            newArr.push(element)
        } else {
            newArr.unshift(element)
        }
    }
    console.log(newArr.join("\n"));
}
negativePositiveNumbers([7, -2, 8, 9]);
negativePositiveNumbers([3, -2, 0, -1]);