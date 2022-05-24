function biggestElement(matrix) {
    let biggest = Number.MIN_SAFE_INTEGER;
    for (let i = 0; i < matrix.length; i++) {
        if (matrix[i] >= biggest) {
            biggest = matrix[i];
        }
        for (let k = 0; k <= matrix.length; k++) {
            if (matrix[i][k] >= biggest) {
                biggest = matrix[i][k];
            }
        }
    }
    return biggest
}
console.log(biggestElement(
    [[20, 50, 10],
    [8, 33, 145]]
));
console.log(biggestElement(
    [[3, 5, 7, 12],
    [-1, 4, 33, 2],
    [8, 3, 0, 4]]
));