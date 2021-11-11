'use strict'

const Queues = require('../lab/queues')

describe('Queues',()=>{
    it('Enqueuing queues',()=>{
        const queues = new Queues()
        queues.enqueue(1)
        queues.enqueue(2)
        queues.enqueue(3)

        expect(queues.front.value).toEqual(1,2,3)

    })
    it('Dequeuing and enqueuing queues',()=>{
        const queues = new Queues()

       queues.dequeue(3)
       queues.enqueue(3)

       queues.dequeue(2)
       queues.enqueue(2)

       queues.dequeue(1)
       queues.enqueue(1)

       expect(queues.rear.value).toEqual(1,2,3)

    })

    it('Peeking queues',()=>{
        const queues = new Queues()

        queues.enqueue(1)
        queues.enqueue(2)
        queues.enqueue(3)

        let test = queues.peek()

        expect(test).toEqual(1)

    })

    it('Checking if the queues are empty or filled',()=>{
        const queues = new Queues()

        let test = queues.isEmpty()

        expect(test).toEqual(true)
    })

})