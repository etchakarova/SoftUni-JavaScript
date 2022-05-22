function squareOfStars(param) {
    let xArr = [];
    if (param == null) {
        param = 5;
    }
    for (let x = 1; x <= param; x++) {
        xArr.push('*');
    }
    for (let y = 1; y <= param; y++) {
        console.log(xArr.join(' '));
    }
}
squareOfStars(1);
squareOfStars(2);
squareOfStars(5);
squareOfStars(7);
squareOfStars();