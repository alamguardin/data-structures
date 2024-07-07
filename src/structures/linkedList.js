class Node {
    constructor(data, next, prev) {
        this.data = data
        this.next = next
        this.prev = prev
    }
}

class LinkedList {
    constructor() {
        this.head = null
        this.tail = null
    }

    // Set data in the last 
    push(data) {
        const newNode = new Node(data, null, this.tail)

        if (!this.head) {
            this.head = newNode
        } else {
            this.tail.next = newNode
        }

        this.tail = newNode
    }

    // Set Data in the start 
    unshift(data) {
        const newNode = new Node(data, this.head, null)

        if (this.head) {
            this.head.prev = newNode
        } else {
            this.tail = newNode
        }

        this.head = newNode
    }
}

const linkedList = new LinkedList()
linkedList.push(24)
linkedList.push(43)
linkedList.push(12)
linkedList.unshift(15)
linkedList.unshift(12)

console.log(linkedList.head)