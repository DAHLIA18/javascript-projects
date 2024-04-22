const input = [6, 9, 12];

let hcf = input[0];
for (let i = 1; i < input.length; i++) {
    let number = input[i];
    while (number !== 0) {
        let temporary = number;
        num = hcf % number;
        hcf = temporary;
    }
    if (hcf === 1) break;
}

console.log("HCF of", input, "is", [hcf]);
