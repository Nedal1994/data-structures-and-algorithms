'use strict'

const BinaryTree = require("./binaryTree")
const Node = require('../lab/Node')

class BinarySearchTree extends BinaryTree
    {
        constructor()
        {
            super()
            this.root=null
        }

        add(value)
        {
            const newNode = new Node(value)
            if(this.root === null)
            {
                this.root = newNode
                return this
            }
            let currentNode = this.root
            while(currentNode)
            {
                if(value === currentNode.value)
                {
                    return undefined
                }
                if(value<currentNode.value)
                {
                    if(currentNode.left === null)
                    {
                        currentNode.left = newNode
                        return this
                    }
                    currentNode=currentNode.left
                }
                else
                {
                    if(currentNode.right === null)
                    {
                        currentNode.right = newNode
                        return this
                    }
                    currentNode=currentNode.right
                }
            }
        }

        contains(value)
        {
            if(!this.root)
            {
                return false
            }
            let currentNode = this.root
            let show = false

            while(currentNode && !show)
            {
                if(value < currentNode.value)
                {
                    currentNode=currentNode.left
                }
                else if(value > currentNode.value)
                {
                    currentNode = currentNode.right
                }
                else
                {
                    show = true
                }
            }
            if(!show)
            {
                return undefined
            }
            return show
        }
    }

module.exports = BinarySearchTree