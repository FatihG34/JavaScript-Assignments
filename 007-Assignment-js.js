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