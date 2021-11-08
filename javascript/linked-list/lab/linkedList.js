'use strict'

const Node = require('./Node')

class LinkedList {
    constructor() {
        this.head = null
        this.tail = null
    }


insertBefore(location, newValue)
{
    if (!this.head) {
        return null
    }
    let newNode = new Node(newValue)
    let current = this.head
    if(this.head.value === location)
    {
        newNode.next = this.head
        this.head = newNode
        return true
    }
    while(current.next !== null)
    {
        if(current.next.value === location)
        {
            newNode.next = current.next
            current.next = newNode
            return true
        }
        current = current.next
    }
    return null
}

insert(value)
{
    const node = new Node(value)
    if (this.head) {
        node.next = this.head
    }
    this.head = node
}

insertAfter(value, newNode)
{
    if (!this.head) {
        return null
    }
    let newNode = new Node(newValue)
    let current = this.head
    if(this.head.value === location)
    {
        newNode.next = this.head
        this.head = newNode
        return true
    }
    while(current !== null)
    {
        if(current.value === location)
        {
            newNode.next = current.next
            newNode = current.next
            return true
        }
        current = current.next
    }
    return null
}

include(value)
{
    let temp = this.head

    while(temp)
    {
        if(temp.value === value)
        {
            return true
        }
        temp = temp.next
    }
    
}


toString()
{
    if (!this.head) {
        return 'linked list is empty'
    }
        let currentNode = this.head
        let finalString=''

    while (currentNode.next)
     {
        finalString += `{${currentNode.value}} ->`
        currentNode = currentNode.next
    }
    finalString += `{${currentNode.value}} -> NULL`
    return finalString
}
}



module.exports = LinkedList