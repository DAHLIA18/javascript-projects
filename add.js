function addNumbers(x,y){
    let answer = x + y;
    return answer
}

function evenNumbers(numbers){
    let result = numbers.filter(Number => Number % 2 == 0);
    return result;
}

addNumbers(2,3)
module.exports = {addNumbers, evenNumbers};