'use string'

function repeatedWords(string){
    const array = string.split(' ')
    const result =[]
    for(let i=0;i<array.length;i++)
    {
        if(array.indexOf(array[i]) !== array.lastIndexOf(array[i]))
        {
            if(!result.includes(array[i]))
            {
                result.push(array[i])
            }
        }
    }
    return result.join(' ')
}
module.exports=repeatedWords