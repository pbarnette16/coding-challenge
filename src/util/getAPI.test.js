import { getAPI } from './getAPI';


describe('getAPI function testing', () => {
    let dataReturn = {
        "size": 25,
        "updatedAt": "2021-03-01T01:47:15.110Z",
        "data": [
            {
                "quantity": 125000,
                "startDate": "2021-02-24T23:59:59.999Z",
                "endDate": "2021-03-11T00:00:00.000Z",
                "productId": "bbd3f603-7622-43ea-9bda-b98d4c729ec2",
                "name": "Handcrafted channels",
                "id": "346bb1a4-2b24-4299-bd2a-3e935e7119dd"
            }]
        };
    
    beforeEach(() => {    
        
      });

    afterEach(() => {
        jest.restoreAllMocks();
    });
    test('should get data', async () => {
        global.fetch = jest.fn(() =>
            Promise.resolve({
                json: () => Promise.resolve(dataReturn),
            })
            );
        const data = await getAPI("dataURL");

        expect(data).toEqual(dataReturn)
           
    
        expect(fetch).toHaveBeenCalledTimes(1);
      });
    
      test('should throw a rejection', async () => {
        global.fetch = jest.fn(() =>
            Promise.reject({error: "Data unable to be returned."})
            );
;

        expect(() =>  getAPI("dataURL")).rejects.toEqual(
            expect.objectContaining({
                "error":"Data unable to be returned." 
            })
            )
           
    
        expect(fetch).toHaveBeenCalledTimes(1);
      });
    


});