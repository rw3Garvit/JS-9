class Q {
    constructor() {
        this.que = []
        this.size = 5
        this.head = 0
        this.tail = this.que.length - 1
    }


    isEmpty() {
        if (this.que.length === 0) console.log("Queue Empty")
    }

    add(element) {

        if (this.que.length < this.size) {
            this.que.push(element)

        }
        else {
            console.log("que full");
        }

    }


    print() {
        console.log(this.que)
    }


    delete() {
        this.que.shift()
    }




}



const que = new Q()
// que.isEmpty()
que.add(5)
que.add(7)
que.add(8)




que.print()