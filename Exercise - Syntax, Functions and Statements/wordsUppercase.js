function wordsUppercase(input) {
    let pattern = /\w+/g;
    let match = pattern.exec(input);
    let arr = [];
    while (match != null) {
        arr.push(match[0].trim());
        match = pattern.exec(input);
    }
    let upperArr = [];
    for (let i = 0; i < arr.length; i++) {
        let word = arr[i];
        let upperWord = word.toUpperCase();
        upperArr.push(upperWord);
    }
    console.log(upperArr.join(", "))
}

wordsUppercase('Hi, how are you?');