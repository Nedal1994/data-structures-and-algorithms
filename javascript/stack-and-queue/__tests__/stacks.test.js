'use strict'

const Stacks = require('../lab/stacks')

describe('Stacks',()=>{
    it('Pushing & poping stacks',()=>{
        const stack = new Stacks()
        stack.push(1)
        stack.push(2)
        stack.push(3)

        let test = stack.pop(3)
        let test1 = stack.pop(2)
        let test2 = stack.pop(1)

        expect(test).toEqual(3)
        expect(test1).toEqual(2)
        expect(test2).toEqual(1)
    })

    it('Peeking stacks',()=>{
        const stack = new Stacks()

        stack.push(3)
        let test = stack.peek(3)
        stack.push(2)
        let test1 = stack.peek(2)
        stack.push(1)
        let test2 = stack.peek(1)

        expect(test).toEqual(3)
        expect(test1).toEqual(2)
        expect(test2).toEqual(1)
    })
    it('Checking if the stacks are empty or filled',()=>{
        const stack = new Stacks()

        let test = stack.isEmpty()

        expect(test).toEqual(true)
    })

})