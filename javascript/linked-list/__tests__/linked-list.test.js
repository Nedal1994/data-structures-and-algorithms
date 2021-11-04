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
})