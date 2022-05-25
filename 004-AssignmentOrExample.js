//Your task is to sum the differences between consecutive pairs in the array in descending order.[2, 1, 10]  -->  9
//In descending order: [10, 2, 1]

//Sum: (10 - 2) + (2 - 1) = 8 + 1 = 9

//If the array is empty or the array has only one element the result should be 0(Nothing in Haskell).

console.log(`Your task is to sum the differences between consecutive pairs in the array in descending order.
[2, 1, 10]  -->  9
In descending order: [10, 2, 1]

Sum: (10 - 2) + (2 - 1) = 8 + 1 = 9

If the array is empty or the array has only one element the result should be 0 (Nothing in Haskell ).`);
console.log(`***********************`);

// const newArr = [11, 2, 1, 8, 5, 7];
// const srtt = newArr.sort();
// console.log(srtt);
// const sortedArr = newArr.sort((a, b) => b - a);
// console.log(sortedArr);


function sumOfDifferences(arr) {
    let sum = 0;
    const sortedArr = arr.sort((a, b) => b - a);

    if (arr.length == 0 || arr.length == 1) {
        return 0;
    } else {

        for (let i = 0; i < arr.length - 1; i++) {
            sum += (sortedArr[i] - sortedArr[i + 1]);
        }
        return sum;
    }
}


const newArr = [11, 2, 1, 9, 5, 7];
console.log(sumOfDifferences(newArr));


const budanedir = [88, 45, 66, 32, 11, 8, 74];
console.log("busanedir Array inin elmanlarının arasındaki fark: ", sumOfDifferences(budanedir));