'use strict'

const Node = require('./Node')

class LinkedList {
    constructor() {
        this.head = null
    }


insert(value)
{
    const node = new Node(value)
    if (!this.head) {
        this.head = node;
        return this
    }
    let currentNode = this.head
    while (currentNode.next) {
        currentNode = currentNode.next
    }
    currentNode.next = node
    return this
}

include(value)
{
    const node = new Node(value)
    if (!this.head) {
        this.head = node;
        return true
    }
    else
    {
        return false
    }

}
}

// I tried to work on the string function & it didn't work & I kept trying

// string()
// {
//     const node = new Node(null)
//     let string='hello'
//     if (!this.head) {
//         this.head = node;
//         return this
//     }
//         let currentNode = this.head
//     while (currentNode.next) {
//         currentNode = currentNode.next
//     }
//     currentNode.next = node
//     return this
// }

module.exports = LinkedList