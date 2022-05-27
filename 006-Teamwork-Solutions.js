// *JS - CC - 005 : Roman Numerals

//* Sembol	Value
//*   S	    0.5(yarım)(Latince: Semis)
//*   I	    1(one)(Latince: mono)
//*   V	    5(five)(Latince: penta)
//*   X	    10(ten)(Latince: deka)
//*   L	    50(fifty)(Latince: quinquaginta)
//*   C	    100(hundred)(Latince: Centum)
//*   D	    500(beş yüz)(Latince: quingenti)
//*   M	    1000(bin)(Latince: mille)
// CDLVII  457
//? The first twenty numbers in order
//? 1- I,  2- II,  3-III, 4-IV, 5-V, 6-VI, 7-VII, 8-VIII, 9-IX, 10-X
//? 11-XI, 12-XII, 13-XIII, 14-XIV, 15-XV, 16-XVI, 17-XVII, 18-XVIII, 19-XIX, 20-XX

//? some numbers
//? XIV = 14
//? XXIV = 24
//? XXXII = 32
//? XXXXVIII = 48(can also be written as XLVIII. When L comes after X, it corresponds to the number 40, since it means 10 less than 50)
//? LX = 60
//? LXVIII = 68
//? XCVI = 96
//? CLIX = 159
//? CCXVII = 217
//? DCCXCIII = 793
//? MMMMCDXXXII = 4432       


//* Purpose of the this coding challenge is to write a code that given numbers convert to Roman Numerals.The Romans wrote numbers using letters - I, V, X, L, C, D, M. (notice these letters have lots of straight lines and are hence easy to hack into stone tablets).

//*     Example:

//* 1000 = M 900 = CM 90 = XC

//* 2008 is written as MMVIII:

//* 2000 = MM 8 = VIII
//* Learning Outcomes
//* At the end of the this coding challenge, students will be able to;

//* Analyze a problem, identify and apply programming knowledge for appropriate solution.

//* Demonstrate their knowledge of algorithmic design principles by using JavaScript and Python effectively.

//* Problem Statement

//* Write a function that takes normal number(8, 148, 457) and convert to Roman Numerals(VIII, CXLVIII, CDLVII)

//* Please note that, there is no need to be able to convert numbers larger than about 3000.(The Romans themselves didn't tend to go any higher)
// const romen = {
//     1: "I",
//     5: "V",
//     10: "X",
//     50: "L",
//     100: "C",
//     500: "D",
//     1000: "M"
// };


// let aNumber = 452;

// let a = aNumber % 10;
// let sayı = a * "I";
// console.log(sayı);

// let b = aNumber % 100 - a;
// console.log(b);


// let number = 125;
// let lastNumber;
// for (let i = 0; i < number.toString().length; i++) {
//     let reminder = 0;
//     if (number > 0) {
//         lastNumber = number % 10;
//         number = (number - lastNumber) / 10
//         console.log(lastNumber);
//     }
// }
// console.log(lastNumber);
// console.log(number);



//* JS - CC - 006 : Merge Arrays
//* Purpose of the this coding challenge is to write a code that given two sorted arrays, returns merged array of these inputs.

//* Learning Outcomes
//* At the end of the this coding challenge, students will be able to;

//* Analyze a problem, identify and apply programming knowledge for appropriate solution.

//* Demonstrate their knowledge of algorithmic design principles by using JavaScript effectively.

//* Problem Statement
//* Write a function that takes two arrays of sorted numbers and combines them into one array as result.

//* Please note that, empty arrays to be checked to avoid exception!

//* Please take a look at the empty function and test code below:

function mergeArray(arr1, arr2) {
    if (arr1.length > 0 && arr2.length > 0) {
        return arr1.concat(arr2);
    } else if (arr1.length > 0 && arr2.length == 0) {
        return arr1;
    } else if (arr1.length == 0 && arr2.length > 0) {
        return arr2;
    } else {
        return "First array and Second array are etpy"
    }
}

const arOne = ["ali", "veli", "deli"];
const arTwo = ["bu", "ikinci", "array"];
console.log(mergeArray(arOne, arTwo));


const bos = [];
console.log(mergeArray(bos, arOne));


