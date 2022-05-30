function extractIncreasingSubsequenceFromArray (){
    let biggest = arr[0];
    let result = [biggest]
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] >= biggest) {
            result.push(arr[i]);
            biggest = arr[i]
        }
    }
    return result;
}
