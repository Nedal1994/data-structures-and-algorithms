'use strict'

const BinaryTree = require('../binaryTree')
const BinarySearchTree = require('../binarySearchTree')
const Node = require('../Node')

let tree = new BinaryTree()
let search = new BinarySearchTree()

describe('Binary trees',()=>{ 

    it('It should successfully instantiate an empty tree',()=>{

        expect(search.root).toEqual(null)
    })

    it('It should successfully instantiate a tree with a single root node',()=>{

        search.add(1)
        expect(search.root.value).toEqual(1)
        expect(search.contains(1)).toEqual(true)

    })
    it('It successfully add a left child and right child to a single root node',()=>{
        let search = new BinarySearchTree()
        search.add(2)
        search.add(1)
        search.add(5)

        expect(search.root.value).toEqual(2)
        expect(search.root.left.value).toEqual(1)
        expect(search.root.right.value).toEqual(5)
    })

    it('It should successfully return a collection from a preorder traversal',()=>{
        let tree = new BinarySearchTree()
        let result = [12,7,1,21,15]

        // root >> left >> right

        tree.add(12) // root
        tree.add(21) // left
        tree.add(7) // right
        tree.add(1) 
        tree.add(15)

        /*
             12
        -----------
        |         |
        |         |
        21        7
        |         |
        |         |
        15        1

        */ 


        expect(tree.preOrder()).toEqual(result)
    })

    it('It should successfully return a collection from an inorder traversal',()=>{
        let tree = new BinarySearchTree()
        let result = [1,7,12,15,21]

        // left >> root >> right

        tree.add(12) // root
        tree.add(21) // left
        tree.add(7) // right
        tree.add(1) 
        tree.add(15)


        expect(tree.inOrder()).toEqual(result)
    })

    it('It should successfully return a collection from an postorder traversal',()=>{
        let tree = new BinarySearchTree()
        let result = [2,4,3,6,8,7,5]

        // left >> right >> root

        tree.add(5) // root
        tree.add(3) // left
        tree.add(7) // right
        tree.add(4) 
        tree.add(6)
        tree.add(2)
        tree.add(8)

        expect(tree.postOrder()).toEqual(result)
    })
    it('It should find the maximum value stored in the tree',()=>{
        let tree = new BinarySearchTree()

        tree.add(12) 
        tree.add(21) // maximum value
        tree.add(7) 
        tree.add(1) // minimum value
        tree.add(15)

        expect(tree.findMax()).toEqual(21)
    })
    it('It should find the minimum value stored in the tree',()=>{
        let tree = new BinarySearchTree()

        tree.add(12) 
        tree.add(21) // maximum value
        tree.add(7) 
        tree.add(1) // minimum value
        tree.add(15)

        expect(tree.findMin()).toEqual(1)
    })

})