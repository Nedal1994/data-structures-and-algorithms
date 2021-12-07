'use strict'

const quickSort = require('../quickSort')

describe('Quick sort',()=>{

    it('Sorting array in ascending order',()=>{

        let inputArray = [8,4,23,42,16,15];
        let left =0
        let right = inputArray.length-1
        let test = quickSort(inputArray,left,right)

        expect(test).toEqual([4,8,15,16,23,42])
    })
    it('Sorting array in reverse order',()=>{

        let inputArray = [20,18,12,8,5,-2];
        let left =0
        let right = inputArray.length-1
        let test = quickSort(inputArray,left,right)

        expect(test).toEqual([-2,5,8,12,18,20])
    })
    it('Sorting array in few unique orders',()=>{

        let inputArray = [5,12,7,5,5,7];
        let left =0
        let right = inputArray.length-1
        let test = quickSort(inputArray,left,right)

        expect(test).toEqual([5,5,5,7,7,12])
    })
    it('Sorting array in nearly sorted orders',()=>{

        let inputArray = [2,3,5,7,13,11]
        let left =0
        let right = inputArray.length-1
        let test = quickSort(inputArray,left,right)

        expect(test).toEqual([2,3,5,7,11,13])
    })

})