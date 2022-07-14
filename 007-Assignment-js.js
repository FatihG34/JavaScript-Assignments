//* Time to put your newly learned skills to work!

//* This is an interview question asked by Google.drawing

//* Given an array of integers and a number k, where 1 <= k <= length of the array, compute the maximum values of each subarray of length k.



const array = [10, 5, 2, 7, 8, 7, 22, 9, 15];
let k = 5;
console.log('Length of Given Array :', array.length);

const slidingMax = (arr, k) => {
    if (k < 1 || k > arr.length) {
        alert(`${k} must bu greater than 1 and less than ${arr.length}`)
    }
    const newArray = [];
    for (let i = 0; i < arr.length - k + 1; i++) {
        newArray.push(Math.max(arr[i], arr[i + 1], arr[i + 2]))
        console.log(newArray);
    }
}
slidingMax(array, k);