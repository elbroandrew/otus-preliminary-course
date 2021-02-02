
//1
export const sumAndMultiplyOutput = (a, b) => {
    if(typeof(a) === 'number' && typeof(a) === 'number'){
        return {sum: a + b, mul: a * b};
    }else{
        return "not numbers";
    }
    
}
let a = 5;
let b = 6;
let obj = sumAndMultiplyOutput(2, 3);
console.log(obj.sum, obj.mul);


//2
export const strSum = (a, b) => {
    return a.length + b.length;
}

let str1 = 'fqg34thywaserfga';
let str2 = 'qwerty';

console.log(strSum(str1, str2));


//3
export const sumOfInputNumbers = () => {
    let input = prompt("Ведите трехзначное число: ");

    return input.split('').reduce((acc, value) => {
        acc += Number(value);
        return acc;
    }, 0)

}

// let sum = sumOfInputNumbers();
// console.log(sum);
