const {FormatData} = require('./formatData')

describe('This is a test of the FormatData function', ()=>{
    test('Positive test of the function with 1000', ()=>{
        expect(FormatData(1000)).toEqual('1,000')
    })

    test('Positive test of the function with 1000:currency', ()=>{
        expect(FormatData(1000, 'currency')).toEqual('$1,000.00')
    })

    test('Positive test of the function a string sent', ()=>{
        expect(FormatData('1234')).toEqual('1,234')
    })

    test('Negative test of the function a string sent ABCD', ()=>{
        expect(FormatData('ABCD')).toEqual("NaN")
    })

});