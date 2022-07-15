//* Time to put your newly learned skills to work!

//* This is an interview question asked by Google.drawing

//* Given an array of integers and a number k, where 1 <= k <= length of the array, compute the maximum values of each subarray of length k.



// const array = [1, 2, 3, 4, 5, 6, 7];
// let k = 3;
// console.log('Length of Given Array :', array.length);

// const slidingMax = (arr, k) => {
//     if (k < 1 || k > arr.length) {
//         alert(`${k} must bu greater than 1 and less than ${arr.length}`)
//     }
//     const newArray = [];
//     for (let i = 0; i < arr.length - k + 1; i++) {
//         if () {
//             newArray.push(Math.max(arr[i], arr[i + 1], arr[i + 2]))
//         }

//     }
//     console.log(newArray);
// }
// slidingMax(array, k);






function printKMax(arr, k) {
    let j, max;
    let newList = [];

    for (let i = 0; i <= arr.length - k; i++) {
        max = arr[i];

        for (j = 1; j < k; j++) {
            if (arr[i + j] > max)
                max = arr[i + j];
        }
        newList.push(max)
    }
    console.log(newList)
}


let arrr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let k = 3;
printKMax(arrr, k);
const newArr = [22, 5, 23, 12, 77, 52, 14, 83];
let num = 4;
printKMax(newArr, num)