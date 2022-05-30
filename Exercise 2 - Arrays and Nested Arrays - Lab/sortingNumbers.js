function sortingNumbers(){
        let result = [];
        let sorted = arr.sort((a, b) => a - b);
        while (sorted.length !== 0) {
            result.push(sorted[0]) && sorted.shift();
            result.push(sorted[sorted.length - 1]) && sorted.pop();
        }
        return result
    }