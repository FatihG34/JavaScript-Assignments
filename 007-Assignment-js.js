//* Time to put your newly learned skills to work!

//* This is an interview question asked by Google.drawing

//* Given an array of integers and a number k, where 1 <= k <= length of the array, compute the maximum values of each subarray of length k.


function printKMax(arr, k) {
    if (k < 1 || k > arr.length) {
        alert(`${k} must bu greater than 1 and less than ${arr.length}`)
    }
    let j, max;
    const newList = [];

    for (let i = 0; i <= arr.length - k; i++) {
        max = arr[i];

        for (j = 1; j < k; j++) {
            if (arr[i + j] > max)
                max = arr[i + j];
        }
        newList.push(max)
    }
    console.log(newList)
};

const aArray = [1, 3, -1, -3, 5, 3, 6, 7];
let k = 3;
printKMax(aArray, k);

const newArr = [22, 5, 23, 12, 52, 2, 14, 23];
let num = 4;
printKMax(newArr, num)