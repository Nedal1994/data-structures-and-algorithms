'use strict'

const Node = require('../lab/Node')

class BinaryTree {

    constructor(root = null)
    {
        this.root=root
    }

    preOrder()
    {
        let array=[]
        const traverse = (node)=>{

            array.push(node.value)

            if(node.left)
            {
                traverse(node.left)
            }
            if(node.right)
            {
                traverse(node.right)
            }
            
        }
        traverse(this.root)
        return array
    }

    inOrder()
    {
        let array=[]
        const traverse = (node)=>{
            if(node.left)
            {
                traverse(node.left)
            }

            array.push(node.value)

            if(node.right)
            {
                traverse(node.right)
            }
            
        }
        traverse(this.root)
        return array
    }

    postOrder()
    {
        let array=[]
        const traverse = (node)=>{

            if(node.left)
            {
                traverse(node.left)
            }
            
            if(node.right)
            {
                traverse(node.right)
            }

            array.push(node.value)
            
        }
        traverse(this.root)
        return array
    }

    

}
    
module.exports = BinaryTree