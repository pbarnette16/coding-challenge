import { sortName } from './sortName';

describe('SortName test', ()=>{

    const names = [{
        name: "Bob"
    }, {
        name: "Sally"
    }, {
        name: "Stu"
    }, {
        name: "Jimmy"
    }];

    const namesSorted = [{
        name: "Bob"
    }, {name: "Jimmy"},
    {name: "Sally"},
    {name: "Stu"}]

    test('Positive test of the sort function with an abbreviated object', ()=>{
        expect(names.sort(sortName)).toEqual(namesSorted)
    })

});