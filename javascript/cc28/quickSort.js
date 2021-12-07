'use strict'

function quickSort(array,left,right)
{
    if(left < right)
    {
        let position = partition(array,left,right)
        quickSort(array, left, position - 1)
        quickSort(array, position, right)
        
    }
    return array
}

function partition(array,left,right)
{
    let pivot = array[Math.floor((right + left)/2)]
    let i = left
    let j = right
    while(i<=j)
    {
        while(array[i]<pivot)
        {
            i++
        }
        while(array[j]>pivot)
        {
            j--
        }
        if(i<=j)
        {
            swap(array,i,j)
            i++
            j--
        }
    }
    return i
}

function swap(array,left,right)
{
    let temp = array[left]
    array[left]=array[right]
    array[right]=temp
}

module.exports = quickSort