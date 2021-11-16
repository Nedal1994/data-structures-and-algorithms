'use strict'

const validateBrackets = require('../lab/brackets')

describe('Brackets',()=>{

    it('Square brackets',()=>{

        let test = '[]'
        expect(validateBrackets(test)).toBe(true)

    })

    it('Round brackets',()=>{

        let test = '()'
        expect(validateBrackets(test)).toBe(true)
    })

    it('Curve brackets',()=>{

        let test = '{}'
        expect(validateBrackets(test)).toBe(true)
})
    it('Curve & round bracket',()=>{

        let test = '{}(){}'
        expect(validateBrackets(test)).toBe(true)
})
    it('Extra characters brackets',()=>{

        let test = '()[[Extra Characters]]'
        expect(validateBrackets(test)).toBe(true)
})
    it('Random brackets',()=>{

        let test = '(){}[[]]'
        expect(validateBrackets(test)).toBe(true)
})
    it('Code fellows brackets',()=>{

        let test = '{}{Code}[Fellows](())'
        expect(validateBrackets(test)).toBe(true)
})

})