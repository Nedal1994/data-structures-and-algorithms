'use strict'

const Node = require('./Node')

class LinkedList {
    constructor() {
        this.head = null
        this.tail = null
    }


insertBefore(value, newNode)
{
    const node = new Node(newNode)
    if (!this.head) {
        return 'error'
    }
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
    const node = new Node(newNode)
    if (!this.head) {
        return 'error'
    }
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