// class Stack {

//     constructor() {
//         this.stack = []
//         this.size = 5
//     }



//     add(element) {

//         if (this.stack.length < this.size) {
//             this.stack.push(element)
//         } else {
//             console.log("stack overflow")
//         }
//     }


//     travel() {

//         console.log(this.stack);

//         if (this.stack.length === 0) {
//             console.log("stack is underflow");
//         }
//     }

//     isEmpty() {

//     }


//     delete() {
//         if (this.stack.length === 0) {
//             console.log("underflow");
//         }
//         this.stack.pop()
//     }



// }



// const stack = new Stack()

// stack.add(5)
// stack.add(7)
// stack.delete()
// stack.delete()
// stack.add(1)



// stack.travel()


let str = "Hello"
console.log(str);
let arr = []
arr.push(...str)

console.log(arr);
