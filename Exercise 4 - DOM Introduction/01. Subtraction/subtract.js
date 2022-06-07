function subtract() {
    let firstNum = document.getElementById('firstNumber').value;
    let secondNum = document.getElementById('secondNumber').value;
    let result = Number(firstNum) - Number(secondNum);
    document.getElementById('result').textContent = result;
    console.log(document.getElementById('result').textContent)
}