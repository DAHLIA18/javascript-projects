function findHCF(arr) {
 
    function findTwoHCF(a, b) {
      
        while (b !== 0) {
            let temp = b;
            b = a % b;
            a = temp;
        }
        return a;
    }

   
    let hcf = arr[0];
    for (let i = 1; i < arr.length; i++) {
        hcf = findTwoHCF(hcf, arr[i]);
        if (hcf === 1) break;
    }

    return [hcf];
}


const input = [2, 6, 8];
const hcf = findHCF(input);
console.log("HCF of", input, "is", hcf);
