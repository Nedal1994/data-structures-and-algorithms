'use strict';

class BinaryTree {
  constructor() {
    this.root = null;
  }
  preOrder() {
    let result = [];
    let traverse = (node) => 
    {
      result.push(node.value);
      if (node.left) 
      {
        traverse(node.left);
      }
      if (node.right) 
      {
        traverse(node.right);
      }
    };
    traverse(this.root);
    return result;
  }

  inOrder() 
  {
    let result = [];
    let traverse = (node) => 
    {
      if (node.left) 
      {
        traverse(node.left);
      }
      result.push(node.value);
      if (node.right)
      {
        traverse(node.right);
      }
    };
    traverse(this.root);
    return result;
  }

  postOrder() {
    let result = [];
    let traverse = (node) => 
    {
      if (node.left) 
      {
        traverse(node.left);
      }
      if (node.right) 
      {
        traverse(node.right);
      }
      result.push(node.value);
    };
    traverse(this.root);
    return result;
  }

  findMaximumValue() {
    if (!this.root)
     {
      return 'the tree is empty';
    }
    let maxNumber = this.root.value;
    let traverse = (node) => 
    {
      if (node.left)
         { 
          traverse(node.left);
         }
      if (node.right) 
         {
          traverse(node.right);
         }
      if (node.value > maxNumber) 
         {
          maxNumber = node.value;
         }
    };

    traverse(this.root);
    return maxNumber;
  }

  breadthFirstSearch(tree) 
  {
    if (!this.root) 
    {
      return 'empty';
    }
    let queue = [tree];
    let result = [];
    while (queue.length > 0) 
    {
      let item = queue.shift();
      let value = item.value;
      result.push(value);

      if (item.left === null && item.right === null) 
      {
        continue;
      }
      if (item.left !== null) 
      {
        queue.push(item.left);
      }

      if (item.right !== null) 
      {
        queue.push(item.right);
      }
    }
    return result;
  }

  sameStructure(tree1,tree2) 
  {
    let count1=0;
    let count2=0;

    let flag=false;

    if (!tree1 || !tree2) 
    {
      return flag;
    }
    let traverse=(tree1)=>
    {
      if(tree1.left===null && tree1.right===null){
        count1++;
      }
      if(tree1.left !== null)
      {
        traverse(tree1.left);
      }
      if(tree1.right !== null)
      {
        traverse(tree1.right);
      }
    };

    let traverse2=(tree1)=>{
      if(tree1.left===null && tree1.right===null)
      {
        count2++;
      }
      if(tree1.left !== null)
      {
        traverse2(tree1.left);
      }
      if(tree1.right !== null)
      {
        traverse2(tree1.right);
      }
    };
    traverse(tree1);
    traverse2(tree2);

    if (count1 === count2) {
      flag =true;
    }
    return flag;
  }

  treeIntersection(tree1, tree2) {
    if (!tree1 || !tree2) 
    {
        return 'error'
    }
    let array = [];

    const traverse = (node1, node2) => 
    {
      if (node1 && node2)
      {
        if (node1.value === node2.value) 
        {
          array.push(node1.value);
        }
        if (node1.left, node2.left) traverse(node1.left, node2.left);
        if (node1.right, node2.right) traverse(node1.right, node2.right);
      }
      return array;
    };
    traverse(tree1, tree2);
    return array;
  }
}



module.exports = BinaryTree;