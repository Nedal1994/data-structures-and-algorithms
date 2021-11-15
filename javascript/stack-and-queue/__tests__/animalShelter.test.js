'use strict'

const AnimalShelter = require('../lab/animalShelter')

describe('Animal shelter queues',()=>{

    it('Enqueuing cats & dogs',()=>{
        const stack = new AnimalShelter()

        let test= stack.enqueue('cat')
        let test1= stack.enqueue('dog')

        expect(test).toEqual('cat')
        expect(test1).toEqual('dog')
    })
    it('Dequeuing cats & dogs',()=>{
        const stack = new AnimalShelter()

        stack.dequeue('cat')
        stack.dequeue('dog')
        let test= stack.enqueue('cat')
        let test1= stack.enqueue('dog')

        expect(test).toEqual('cat')
        expect(test1).toEqual('dog')
    })
    it('Should return null if pref is neither a cat or dog',()=>{
        const stack = new AnimalShelter()


        stack.dequeue('cat')
        stack.dequeue('dog')

        stack.enqueue('cat')
        stack.enqueue('dog')

        let test = stack.dequeue()

        expect(test).toEqual(null)

    })
})