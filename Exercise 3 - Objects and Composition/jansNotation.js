function jansNotation(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] == "number") {
            result.push(arr[i]);
        }
        if (typeof arr[i] == "string") {
            if (result.length <= 1) {
                console.log(`Error: not enough operands!`);
                return;
            }
            let secondNumber = result.pop();
            let firstNumber = result.pop();
            if (arr[i] == "+") {
                result.push(firstNumber + secondNumber);
            } else if (arr[i] == "-") {
                result.push(firstNumber - secondNumber);
            } else if (arr[i] == "*") {
                result.push(firstNumber * secondNumber);
            } else if (arr[i] == "/") {
                result.push(firstNumber / secondNumber);
            }
        }
    }
    if (result.length > 1) {
        console.log(`Error: too many operands!`);
    } else {
        console.log(result[0]);
    }
}
jansNotation([
    3,
    4,
    '+'
]);
jansNotation([
    5,
    3,
    4,
    '*',
    '-'
]);
jansNotation([
    7,
    33,
    8,
    '-'
]);
jansNotation([
    15,
    '/'
]);