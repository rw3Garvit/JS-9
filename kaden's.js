let arr = [-2, -3, 4, -1, -2, 1, 5, -3]


let sum = 0
let max = arr[0]

for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i]
    if (sum > max) {
        max = sum
    }

    if (sum < 0) {
        sum = 0
    }

}

console.log(max);