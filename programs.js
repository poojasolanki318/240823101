// // console.log("hello world")

// // //  program-1

//  const name= "Pooja"
//  console.log(name)

//  const b=4
// if (b%2==0)
// {
//     console.log("number is even")
// }
// else{
//     console.log("number is odd")
// }
// console.log("how are you?")

// //  program-2

// var num1=5
// var num2=9

// if(num1 >= num2)
// {
//     console.log("num1 is big")
// }
// else{
//     console.log("num2 is big")
// }

// // program-3
// var year=2020
// if(year%4==0)
// {
//     console.log("leap year")
// }
// else{
//     console.log("not leap year")
// // }

// // program-4
// var num = 5
// var sum = 0
// for (var i=1;i<=num;i++)
// {
//     sum+=i
// }
// console.log("sum of num is:",sum)

// // // program-5
// var num = 4
// var fact = 1
// for (var i=num;i>0;i--)
// {
//     fact*=i
// }
// console.log("factoril of num is:",fact)

// // program-6
// const  num = 3
// for(var i=1;i<=10;i++){
//     console.log(`${num} X ${i} = ${num*i}`)

// }

// // program-7
// let num1= 1234;
// let result = num1.toString().split('').reverse().join('');
// console.log(result)

// // program-8
// function isPalid(num)
// {
//     let n = num.toString();
//     let reverse = n.split('').reverse().join('');
//     return n===reverse ? 'Palindrom' : 'not Palindrom'
// }
// console.log(isPalid(121))

// // program-9
// let n = 11;
// let isPrime = true;

// if (n <= 1) {
//     isPrime = false;
// } else {
//     for (let i = 2; i < n; i++) {
//         if (n % i === 0) {
//             isPrime = false;
//             break;
//         }
//     }
// }
// console.log(isPrime ? 'Prime number' : 'Not a prime number');

// program-10
// function counting(num) {
//     return String(num).split('').reduce(
//         (count, digit) => count + 1, 0);
// }
// let num1 = 5023;
// let result1 = counting(num1);
// console.log("Number of digits in " + num1 + ": " + result1);


// program-11
// function sumOfDigit(num) {
//     let numStr = num.toString();
//     let sum = 0;

//     for (let digit of numStr) {
//         sum += parseInt(digit);
//     }

//     return sum;
// }

// console.log(sumOfDigit(123));

// program-12

// let sum = 0;
// const number = 153
// let temp = number;
// while (temp > 0) {
   
//     let remainder = temp % 10;
//     sum += remainder * remainder * remainder;
//     temp = parseInt(temp / 10);
// }
// if (sum == number) {
//     console.log(`${number} is an Armstrong number`);
// }
// else {
//     console.log(`${number} is not an Armstrong number.`);
// }

// program-13

// const number = 5;
// let n1 = 0, n2 = 1, nextTerm;
// for (let i = 1; i <= number; i++) {
//     console.log(n1);
//     nextTerm = n1 + n2;
//     n1 = n2;
//     n2 = nextTerm;
// }

// program-14

// let s = 'g';
// if (s === 'a' || s === 'e' || s === 'i' || s === 'o' || s === 'u' ||
//     s === 'A' || s === 'E' || s === 'I' || s === 'O' || s === 'U') {
//     console.log(`${s} is a vowel`);
// } else {
//     console.log(`${s} is a consonant`);
// }

// program-15
let x = 4
let y = 2;
let a = x + y;
let b = x - y;
let c = x*y;
let d = x/y;
console.log(a);
console.log(b);
console.log(c);
console.log(d);

// program-16


var gcd = function(a, b) {
    if (!b) {
      return a;
    }
  
    return gcd(b, a % b);
  }

console.log(gcd(20,28));













