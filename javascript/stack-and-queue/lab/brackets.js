'use strict'
const Stacks = require('../lab/stacks')
function ValidateBrackets(string){

    let stack = new Stacks()

    let brackets = {
        '}':'{',
        ')':'(',
        ']':'[',
    }

    for(let i of string)
    {
        if(string[i] === '{' || string[i] === '[' || string[i] ==='(')
        {
            stack.push(i)
        }
        else if(string[i] === '}' || string[i] === ']' || string[i] ===')')
        {
            if(stack.isEmpty())
            {
                return false
            }
            if(stack.pop() !== brackets[i])
            {
                return false
            }
        }
    }
    if(!stack.isEmpty())
        {
            return false
        }
        return true
}

module.exports = ValidateBrackets