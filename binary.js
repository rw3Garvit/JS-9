let arr = [1, 2, 3, 5, 7, 9]
let element = 9
let head = 0
let tail = arr.length - 1


function eleFound(arr, element, head, tail) {

    let mid = Math.floor((head + tail) / 2)


    if (head > tail) {
        return
    }

    if (arr[mid] == element) {
        return true
    }


    if (arr[mid] < element) {
        return eleFound(arr, element, mid + 1, tail)
    } else {
        return eleFound(arr, element, 0, mid)
    }

}


const result = eleFound(arr, element, head, tail)

console.log(result);