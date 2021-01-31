
//1
let a = 5;
let b = 6;
let c = a + b;
let d = a * b;
console.log(c);
console.log(d);

//2
let str1 = 'fqg34thywaserfga';
let str2 = 'qwerty';

const symSum = (a, b) => {
    return a.length + b.length;
}

symSum(str1, str2);

//3
const inputCount = () => {
    let input = prompt("Ведите трехзначное число: ");

    return input.split('').reduce((acc, value) => {
        acc += new Number(value);
        return acc;
    }, 0)

}

inputCount();