const arr = [1, 2, 3, 54]

console.log(arr);


const result = new Map()
result.set("apple", 200)
result.set("mango", 500)


const res = result.get("apple")

console.log(res);

console.log(result);

result.forEach(element => {
    console.log(element);
});


const product = new Set()

product.add("Hello")
product.add("namste")
product.add("Hell")


console.log(product);


product.forEach((e) => {
    console.log(e);
})


