class Node {
    constructor(data, prev = null) {
        this.data = data
        this.next = null
        this.prev = prev
    }
}

class LinkedList {
    constructor() {
        this.head = null
        this.tail = null
    }

    push(data) {
        const newNode = new Node(data, this.tail)

        if (!this.head) {
            this.head = newNode
        } else {
            this.tail.next = newNode
        }

        this.tail = newNode
    }
}

const linkedList = new LinkedList()
linkedList.push(24)
linkedList.push(43)
linkedList.push(12)
linkedList.push(15)

console.log(linkedList.head)