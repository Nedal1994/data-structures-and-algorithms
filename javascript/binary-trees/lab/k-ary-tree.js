'use strict'

    function fizzBuzz(tree1)
    {
        if(tree1.root === null)
        {
           console.log('empty');
        }
        
        const tree2 = (node)=>{
            if(tree2.root.value % 3 === 0 && tree2.root.value % 5 === 0)
            {
                tree2.root.value = 'FizzBuzz'
            }
            if(tree2.root.value % 3 === 0)
            {
                tree2.root.value = 'Fizz'
            }
            if(tree2.root.value % 5 === 0)
            {
                tree2.root.value = 'Buzz'
            }
            if(tree2.root.value % 3 !== 0 && tree2.root.value % 5 !== 0)
            {
                tree2.root.value = `${tree2.root.value}`
            }
        }

        const traverse = (node) =>{
            
            if(node.left)
            {
            if(node.left.value %5 === 0 & node.left.value %3 ===0)
            {
                node.left.value = 'FizzBuzz'
            }
            if(node.left.value %3 === 0)
            {
                node.left.value ='Fizz'
            }
            if(node.left.value %5 === 0)
            {
                node.left.value ='Buzz'
            }
            if(node.left.value %5 !== 0 & node.left.value %3 !==0)
            {
                node.left.value = `${node.left.value}`
            }
            traverse(node.left)
        }


        if(node.right)
        {
        if(node.right.value %5 === 0 & node.right.value %3 ===0)
        {
            node.right.value = 'FizzBuzz'
        }
        if(node.right.value %3 === 0)
        {
            node.right.value ='Fizz'
        }
        if(node.right.value %5 === 0)
        {
            node.right.value ='Buzz'
        }
        if(node.right.value %5 !== 0 & node.right.value %3 !==0)
        {
            node.right.value = `${node.right.value}`
        }
        traverse(node.right)
    }
        }

        return tree2
    }

module.exports = fizzBuzz