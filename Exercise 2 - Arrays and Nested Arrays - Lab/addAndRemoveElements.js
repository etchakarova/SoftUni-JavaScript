function addAndRemoveElements(){
        let result = [];
        let lastNum = result.unshift()
        for (let i = 0; i <= arr.length; i++) {
            if (arr[i] === "add") {
                result.push(++lastNum);
            }
            if (arr[i] === "remove") {
                lastNum = ++lastNum;
                result.pop();
            }
        }
        if (result.length === 0) {
            console.log("Empty");
        }
        console.log(result.join("\n"));
    }