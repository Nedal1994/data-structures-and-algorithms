'use strict'

const LeftJoin = require('../leftJoin')

const synonym = 
            {
            fond:'enamored',
            wrath:'anger',
            diligent:'employed',
            outfit:'garb',
            guide:'usher'
           }
           const antonym ={
            fond:'averse',
            wrath:'delight',
            diligent:'idle',
            guide:'follow',
            flow:'jam'}

describe('Hash map left join',()=>{
    it('It should return the synonym values',()=>{
        expect(synonym).toEqual({fond:'enamored',wrath:'anger',diligent:'employed',outfit:'garb',guide:'usher'})
    })
    it('It should return the antonym values',()=>{
        expect(antonym).toEqual({fond:'averse',wrath:'delight',diligent:'idle',guide:'follow',flow:'jam'})
    })
    it('It should return both the synonym & antonym values joined together',()=>{
        let test = LeftJoin([synonym,antonym])
        expect(test).toEqual([[{"diligent": "employed", "fond": "enamored", "guide": "usher", "outfit": "garb", "wrath": "anger"}], [{"diligent": "idle", "flow": "jam", "fond": "averse", "guide": "follow", "wrath": "delight"}]])
    })
})