function circleArea(input) {
    if (typeof(input) != "number") {
        console.log(`We can not calculate the circle area, because we receive a ${typeof(input)}.`);
    } else {
        let area = Math.pow(input, 2) * Math.PI;
        console.log(area.toFixed(2));
    }
}

circleArea(5);
circleArea("name");
