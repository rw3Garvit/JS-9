let arr = [2, 12, 3, 5, 7, 1]


let index = 0
let element = 25

// arr[6] = arr[arr.length - 1]

for (let i = arr.length; i > index; i--) {
    arr[i] = arr[i - 1]
    console.log("hherlloo");

}

arr[index] = element

console.log(arr);
















// let max = arr[0]

// for (let i = 0; i < arr.length; i++) {


//     if (arr[0] > arr[i + 1]) {
//         max = arr[i + 1]
//     }

// }

// console.log(max);

// arr[index] = element

// console.log(arr);