'use strict'

const Queues = require('./queues')

class AnimalShelter {
    constructor() 
    {
        this.cat = new Queues()
        this.dog = new Queues()
    }

    enqueue(animal)
    {
        if(animal === 'cat')
        {
            this.cat.enqueue(animal)
            return animal
        }
        else if(animal === 'dog')
        {
            this.dog.enqueue(animal)
            return animal
        }
        else
        {
            return 'Invalid input'
        }
    }
    dequeue(pref)
    {
        if(pref === 'cat')
        {
            return this.cat.dequeue()
        }
        else if(pref === 'dog')
        {
            return this.cat.dequeue()
        }
        else
        {
            return null
        }

    }
}

module.exports = AnimalShelter