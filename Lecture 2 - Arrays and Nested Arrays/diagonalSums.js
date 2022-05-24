function diagonalSums(matrix) {
    let firstDig = 0;
    let secondDig = 0;
    let firstIndex = 0;
    let secondIndex = matrix[0].length - 1;
    matrix.forEach(array => {
        firstDig += array[firstIndex++];
        secondDig += array[secondIndex--];
    });
    console.log(firstDig + ' ' + secondDig);
}
diagonalSums(
    [[20, 40],
    [10, 60]]
);
diagonalSums(
    [[3, 5, 17],
    [-1, 7, 14],
    [1, -8, 89]]
);
