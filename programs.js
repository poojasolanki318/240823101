// console.log("hello world")

// //  program-1

 const name= "Pooja"
 console.log(name)

 const b=4
if (b%2==0)
{
    console.log("number is even")
}
else{
    console.log("number is odd")
}
console.log("how are you?")

//  program-2

var num1=5
var num2=9

if(num1 >= num2)
{
    console.log("num1 is big")
}
else{
    console.log("num2 is big")
}

// program-3
var year=2020
if(year%4==0)
{
    console.log("leap year")
}
else{
    console.log("not leap year")
// }

// program-4
var num = 5
var sum = 0
for (var i=1;i<=num;i++)
{
    sum+=i
}
console.log("sum of num is:",sum)

// // program-5
var num = 4
var fact = 1
for (var i=num;i>0;i--)
{
    fact*=i
}
console.log("factoril of num is:",fact)

// program-6
const  num = 3
for(var i=1;i<=10;i++){
    console.log(`${num} X ${i} = ${num*i}`)

}

// program-7
let num1= 1234;
let result = num1.toString().split('').reverse().join('');
console.log(result)

// program-8
function isPalid(num)
{
    let n = num.toString();
    let reverse = n.split('').reverse().join('');
    return n===reverse ? 'Palindrom' : 'not Palindrom'
}
console.log(isPalid(121))

// program-9
let n = 11;
let isPrime = true;

if (n <= 1) {
    isPrime = false;
} else {
    for (let i = 2; i < n; i++) {
        if (n % i === 0) {
            isPrime = false;
            break;
        }
    }
}
console.log(isPrime ? 'Prime number' : 'Not a prime number');

// program-10
function sumOfDigit(num) {
    let numStr = num.toString();
    let sum = 0;

    for (let digit of numStr) {
        sum += parseInt(digit);
    }

    return sum;
}

console.log(sumOfDigit(123));





