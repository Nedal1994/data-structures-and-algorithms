'use strict'

const pseudoQueue = require('../lab/pseudoQueue')

describe('Pseudo queues',()=>{

    it('Enqueuing stacks',()=>{
        const stack = new pseudoQueue()

        
         stack.enqueue(3)
         stack.enqueue(2)
         stack.enqueue(1)

        expect(stack.front.value).toEqual(3)
        expect(stack.front.value).toEqual(2)
        expect(stack.front.value).toEqual(1)

    })

    it('Dequeuing stacks',()=>{
        // const pseudo = new pseudo()
        // stack.push(1)
        // stack.push(2)
        // stack.push(3)

        // let test = stack.pop(3)
        // let test1 = stack.pop(2)
        // let test2 = stack.pop(1)

        // expect(test).toEqual(3)
        // expect(test1).toEqual(2)
        // expect(test2).toEqual(1)
    })
})