'use strict'

const LinkedList = require('../lab/linkedList')

describe('linked list',()=>{
    it('creation of linked list',()=>{
        let list = new LinkedList()
        expect(list.head).toBeNull()
    })

    it('append to linked list',()=>{
        let list=new LinkedList()

        list.append('one')
        expect(list.head.value).toEqual('one')

        list.append('two')
        expect(list.head.value).toEqual('two')
    })

    it('It should return the zipped linked list',()=>{
        let list=new LinkedList()

        list.insert('1')
        list.insert('2')
        list.insert('3')
        list.insert('4')
        list.insert('5')
        list.insert('9')
        let string = list.string()
        expect(string).toEqual(' [1] -> [5] -> [3] -> [9] -> [2] -> [4] -> NULL')
    })
})