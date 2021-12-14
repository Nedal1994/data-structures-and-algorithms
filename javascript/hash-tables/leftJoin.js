'use strict'

const leftJoin = (table1,table2) =>{
    let array =[]

    for(let i in table1)
    {
        array[i] = [table1[i]]
    }
    for(let j in table2)
    {
        if(array[j])
        {
            array[j].push(table2[j])
        }
        else
        {
            array[j]=[null,table2[j]]
        }
    }
    return array
}
module.exports=leftJoin