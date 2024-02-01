const arr = [2, 4, 6, 3, 1]



for (let i = 0; i < arr.length; i++) {
    // console.log(arr[i]);
    for (let j = i + 1; j < arr.length; j++) {

        // console.log(arr[j], "iiiii");

        if (arr[i] > arr[j]) {
            let temp = arr[i]
            arr[i] = arr[j]
            arr[j] = temp
        }

    }
}

console.log(arr);