'use strict';

let array=[1,2,3,4,5]

function reverseArray(){
  const value =i = arr.length - 1

  for (value; i >= 0; i--) 
  {
    console.log(arr[i]);
}
}
reverseArray()



describe('Testing challenge 1', () => {
    test('It should return an array being reversed', () => {
      expect(reverseArray([1, 2, 3, 4, 5])).toEqual([5,4,3,2,1]);
    });
  });