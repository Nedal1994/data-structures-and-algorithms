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

        list.append('1')
        list.append('2')
        list.append('3')
        list.append('4')
        list.append('5')
        list.append('9')
        let zip = list.string()
        expect(zip).toEqual(' [1] -> [5] -> [3] -> [9] -> [2] -> [4] -> NULL')
    })

    it('The nodes should be reversed',()=>{
        let list=new LinkedList()

        let reverse=list.reverse()
        expect(reverse).toEqual(' [5] -> [4] -> [3] -> [2] -> [1] -> NULL')

    })
})