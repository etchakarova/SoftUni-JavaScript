function sameNumbers(num) {
    sameOrNot(num);
    sum(num);

    function sum(num) {
        let sum = 0;
        let numToString = num.toString();
        for (let i = 0; i < numToString.length; i++) {
            sum += Number(numToString[i]);
        }
        console.log(sum);
    }
    function sameOrNot(num) {
        let isSame = true;
        let numToString = num.toString();
        for (let i = 0; i < numToString.length - 1; i++) {
            if (numToString[i] !== numToString[i + 1]) {
                isSame = false;
                console.log("false")
                return;
            }else {
                isSame = true;
            }
        }
        if (isSame = true) {
            console.log('true')
        }
    }
}
sameNumbers(2222222);
sameNumbers(1234);