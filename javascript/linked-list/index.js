'use strict'

const LinkedList=require('./lab/linkedList')

const x=new LinkedList()

x.insert(1)
x.insert(2)
x.insert(3)

x.include(1)
x.include(2)
x.include(3)

// I tried to work on the string function & it didn't work

// x.string(a)
// x.string(b)
// x.string(c)


console.log(x)