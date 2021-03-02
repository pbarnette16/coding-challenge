const {compareDates} = require('./compareDates')

describe('compare dates', () => {
    const randomObject = [
        {
            "name": "Third Item",
            "Start Date": "2021-03-22T00:00:00.000Z"
        },
        {
            "name": "First Item",
            "Start Date": "2021-02-02T00:00:00.000Z"
        },
        {
            "name": "Second Item",
            "Start Date": "2021-03-15T00:00:00.000Z"
        }
    ]    


    it('should compare the dates and return an sorted array', () => {
       let sortedArray = randomObject.sort(compareDates)

       expect(sortedArray).toEqual(expect.arrayContaining([
        {
            "name": "First Item",
            "Start Date": "2021-02-02T00:00:00.000Z"
        },
        {
            "name": "Second Item",
            "Start Date": "2021-03-15T00:00:00.000Z"
        },
        {
            "name": "Third Item",
            "Start Date": "2021-03-22T00:00:00.000Z"
        }
       ]))
    });
});