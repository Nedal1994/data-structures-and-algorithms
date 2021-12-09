'use strict'

const HashTable = require('../hashTables')
const hashTable = require('../hashTables')
const hash = new hashTable(10)

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