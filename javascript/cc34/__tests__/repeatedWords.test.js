'use string'

const repeat = require('../repeatedWords')

describe('Find repeated words',()=>{
    it('In a galaxy far far away',()=>{
        let input = repeat('In a galaxy far far away')
        expect(input).toEqual('far')
    })
    it('Taco cat ate a taco',()=>{
        // because taco & Taco are different
        let input = repeat('taco cat ate a taco')
        expect(input).toEqual('taco')
    })
    it('No. Try not. Do or do not. There is no try.',()=>{
        let input = repeat('No. Try not. Do or do not. There is no try.')
        expect(input).toEqual('not.')
    })
})