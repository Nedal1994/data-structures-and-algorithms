'use strict'

const Stack = require('./lab/stacks')
const Queue = require('./lab/queues')

const newStack = new Stack()
const newQueue = new Queue()

newStack.push(1)
newStack.push(2)
newStack.push(3)

newStack.peek()
newStack.pop()
newStack.pop()
newStack.peek()

newQueue.enqueue(1)
newQueue.enqueue(2)
newQueue.enqueue(3)

newQueue.dequeue()