function sumOfNumbersNM(a, b) {
    a = Number(a);
    b = Number(b);
    let sum = 0;
    for (let i = a; i <= b; i++) {
        sum += i
    }
    console.log(sum)
}

sumOfNumbersNM('1', '5');
sumOfNumbersNM('-8', '20');