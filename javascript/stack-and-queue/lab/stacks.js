'use strict'

const Node = require('./Node')

//Stacks

class Stacks {
    constructor() {
        this.top = null
        this.length = 0
    }

    //push adds the item to the top of the stack
    push(value) {
        if(this.isEmpty())
        {
            const newNode = new Node(value)
            this.top=newNode
        }
        else
        {
            const newNode = new Node(value)
            newNode.next = this.top
            this.top = newNode
        }
    }

    //pop removes the top item from the stack
    pop() {
        if(this.isEmpty())
        {
            return false
        }
        const temp = this.top
        this.top = this.top.next
        temp.next = null
        return temp.value
    }

    //peek returns the item to the top of the stack
    peek() {
        if(this.isEmpty())
        {
            return 'no nodes in the stack'
        }
        return this.top.value
    }

     //isEmpty returns true if the stack is empty 
    // returns false if the stack is filled with items 
    isEmpty() {
        return this.top === null
    }
}

module.exports = Stacks