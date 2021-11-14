'use strict'
const Node = require('./Node')
const Stacks = require('./stacks')

class PseudoQueue {
    constructor() 
    {
        this.front = new Stacks()
        this.rear = new Stacks()
    }

    enqueue(value)
    {
        this.rear.push(value)
        return this.front.peek()
    }
    dequeue()
    {
        if(this.rear.peek() !== null && this.front.peek() !==null)
        {
            return this.rear.push(this.front.pop())
        }
        return this.rear.pop()
    }
}
module.exports=PseudoQueue