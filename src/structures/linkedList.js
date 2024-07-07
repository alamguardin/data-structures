class Node {
    constructor(data) {
        this.data = data
        this.next = null
        this.prev = null
    }
}

const node = new Node(1)
console.log(node)