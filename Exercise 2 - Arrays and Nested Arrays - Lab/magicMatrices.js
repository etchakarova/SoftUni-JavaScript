function magicMatrices(){
        let result = [];
    
        let rowSum = 0;
    
        for (let row = 0; row < matrix.length; row++) {
            result.push(matrix[row].reduce((a, b) => a + b, rowSum));
    
            let colSum = 0;
    
            for (let col = 0; col < matrix.length; col++) {
                colSum += matrix[col][row];
            }
            result.push(colSum);
        }
    
        for (let i = 0; i < result.length - 1; i++) {
            if (result[i] != result[i + 1]) {
                return false;
            }
        }
        return true;
    }