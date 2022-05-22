function aggregateElements(arr) {
    console.log(sum(arr));
    console.log(inverse(arr));
    console.log(concat(arr));
    
    function sum(arr) {
        let sumNum = 0;
        for (let i = 0; i < arr.length; i++) {
            sumNum += Number(arr[i]);
        }
        return sumNum;
    }
    function inverse(arr) {
        let inverseSum = 0;
        for (let i = 0; i < arr.length; i++) {
            inverseSum += (1 / Number(arr[i]));
        }
        return inverseSum;
    }
    function concat(arr) {
        let concatNum = "";
        for (let i = 0; i < arr.length; i++) {
            concatNum += arr[i];
        }
        return concatNum;
    }
}
aggregateElements([1, 2, 3]);
aggregateElements([2, 4, 8, 16]);