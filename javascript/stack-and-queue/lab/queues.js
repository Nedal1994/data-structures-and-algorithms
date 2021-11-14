'use strict'

const Node = require('./Node')
const Stacks = require('./stacks')

//Queues

class Queues {
    constructor() {
        this.front = null
        this.rear = null
        this.length = 0
    }

    //enqueue removes the top item from the queue
    enqueue(value) {
        const newNode = new Node(value)
        if (this.isEmpty()) {
            this.front = newNode
            this.rear = newNode
            this.length += 1
        }
        else {
            this.rear.next = newNode
            this.rear = newNode
            this.length += 1
            return this.front
        }

    }

    //dequeue adds the item to the top of the queue
    dequeue() {
        if (this.isEmpty()) {
            return 'queue is empty'
        }
        const temp = this.front
        this.front = this.front.next
        temp.next = null
        this.length -= 1
        return temp.value
    }

    //peek returns the item to the top of the queue
    peek() {
        if (this.isEmpty()) {
            return null
        }
        return this.front.value
    }

    //isEmpty returns true if the queue is empty 
    // returns false if the queue is filled with items 
    isEmpty() {
        return this.length === 0
    }
}


module.exports = Queues