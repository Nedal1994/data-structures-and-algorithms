'use strict'

const LinkedList = require("../linked-list/lab/linkedList")

class HashTable{
    constructor(size)
    {
        this.size=size
        this.map=new Array(size)
    }
    getHash(key)
    {
        const asciiSum = key.split('').reduce((p,n)=>p+n.charCodeAt(0),0)
        const withPrime = asciiSum + 599
        return withPrime % this.size
    }
    set(key,value)
    {
        const hash = this.getHash(key)

        const entry = {[key]:value}

        if(!this.map[hash])
        {
            this.map[hash] = new LinkedList()
        }
        this.map[hash].insert(entry)
    }
    get(key)
    {
        const hash = this.getHash(key)
        return this.map[hash].head.value[key]
    }
    contains(key)
    {
        let hash = this.getHash(key)
        return this.map[hash] ? true:false
    }
}
module.exports=HashTable