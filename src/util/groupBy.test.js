import { groupBy } from './groupBy';

describe('GroupBy test', ()=>{

    const groups = [{
        name: "Bob",
        age: 45
    }, {
        name: "Sally",
        age: 32
    }, {
        name: "Stu",
        age: 45
    }, {
        name: "Jimmy",
        age: 40
    }];

    const groupped = {
        45: [{
            name: "Bob",
            age: 45
        },{
            name: "Stu",
            age: 45
        }],
        32: [{
            name: "Sally",
            age: 32
        }],
        40: [{
            name: "Jimmy",
            age: 40
        }]
    }

    test('Positive test of the sort function with an abbreviated object', ()=>{
        expect(groupBy(groups, 'age')).toEqual(groupped)
    })

});