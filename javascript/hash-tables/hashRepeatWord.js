'use strict'

const hashTable = require('./hashTables')

const repeatedWord =(string)=>
{
    let word = string.split(/[ .,-:;!?]+/)
    let hash1 = new hashTable(word.length)

    for(let i=0;i<word.length;i++)
    {
        if(!hash1.contains(word[i]))
        {
            hash1.set(word[i],word[i])
        }
        else
        {
            return word[i]
        }
    }
    return null
}
module.exports=repeatedWord