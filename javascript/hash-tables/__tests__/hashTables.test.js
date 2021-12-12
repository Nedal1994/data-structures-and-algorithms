'use strict'

const HashTable = require('../hashTables')
const repeat = require('../hashRepeatWord')
const hash = new HashTable(10)

describe('Hash tables',()=>{

    it('Adding a key/value to your hashtable results in the value being in the data structure',()=>{
         hash.set('key','value')
        expect(hash.contains('key')).toEqual(true)
    })

    it('Retrieving based on a key returns the value stored',()=>{

        expect(hash.get('key')).toEqual('value')
    })

    it('Successfully returns null for a key that does not exist in the hashtable',()=>{

        expect(hash.contains('nedal')).toEqual(false)
    })
    it('Successfully handle a collision within the hashtable',()=>{

        hash.set('key2','value2')
        expect(hash.get('key2')).toEqual(undefined)
    })
    it('Successfully retrieve a value from a bucket within the hashtable that has a collision',()=>{

        let hash = new HashTable()
        hash.set('key2','value2')
        expect(hash.get('key2','value2')).toStrictEqual('value2')
    })
    it('Successfully hash a key to an in-range value',()=>{

        expect(hash.getHash('key')).toStrictEqual(8)
    })
})
describe('Hash table repeated words',()=>{
    let word1='Once upon a time, there was a brave princess who...'
    let word2='It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair, we had everything before us, we had nothing before us, we were all going direct to Heaven, we were all going direct the other way – in short, the period was so far like the present period, that some of its noisiest authorities insisted on its being received, for good or for evil, in the superlative degree of comparison only...'
    let word3='It was a queer, sultry summer, the summer they electrocuted the Rosenbergs, and I didn’t know what I was doing in New York...'

    it('Find the word that are duplicated multiple times',()=>{
        let test = repeat(word1)
        expect(test).toEqual('a')

    })
    it('Find the word that are duplicated multiple times',()=>{

        let test1 = repeat(word2)
        expect(test1).toEqual('was')

    })
    it('Find the word that are duplicated multiple times',()=>{

        let test = repeat(word3)
        expect(test).toEqual('sultry')

    })
})