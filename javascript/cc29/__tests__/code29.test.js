'use strict'

const mergeSort = require('../code29')

describe('Merge sort',()=>{

    it('Sorting array in ascending order',()=>{

        let inputArray = [38,27,43,3,9,82,10];
        let test = mergeSort(inputArray)

        expect(test).toEqual([3,9,10,27,38,43,82])
    })

})