function greatestCommonDivisor(a, b){
        a = Math.abs(a);
        b = Math.abs(b);
        while(b) {
          let t = b;
          b = a % b;
          a = t;
        }
        console.log(a);
}
greatestCommonDivisor(15, 5);
greatestCommonDivisor(2154, 458);