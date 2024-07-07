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

    // Delete first item
    shift() {
        if (!this.head) { return null }

        this.head = this.head.next

        if (this.head) {
            this.head.prev = null
        } else {
            this.tail = null
        }
    }

    pop() {
        if (!this.tail) { return null }

        this.tail = this.tail.prev

        if (this.tail) {
            this.tail.next = null
        } else {
            this.head = null
        }
    }
}

export default LinkedList