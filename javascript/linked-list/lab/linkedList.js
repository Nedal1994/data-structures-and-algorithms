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

insertAfter(value,newValue)
{
    let newNode = new Node(newValue)
    let current = this.head

    if(this.head.value === location)
    {
        newNode.next = current.next
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

kthFromEnd(k)
{
    let current = this.head
    let count = 0

    while(current !== null)
    {
        if(count === k)
        {
            return current
        }
        count++
        current = current.next
    }
    return false
}


zipLists(list1,list2)
{
    let l3 = new Node(0)
    let current = l3

    let l1= list1.head
    let l2= list2.head

    while(l1 !== null && l2 !== null)
    {
        if(l1 < l2)
        {
            current.next = l1
            l1=l1.next
        }
        else
        {
            current.next = l2
            l2 = l2.next
        }
        current=current.next
    }
    if(l1 !== null)
    {
        current.next = l1
    }
    else if(l2 !== null)
    {
        current.next = l2
    }
    return l3.next

}

 reverse (node)  {
    let prev = null;
    let current = node.head;
    let next = null;
    let head = node.head;
    while (current) {
      next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }
    node.head = prev;
    node.tail = head;
    return node;
  };

}
module.exports = LinkedList