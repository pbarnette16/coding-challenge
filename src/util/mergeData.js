/**
 * mergeData - Merges the data from the APIs and formats it to the output needed for the table
 * filters out older dates
 * @param {Object} dataObj - The data from the services massaged for output
 * @returns {Object} for display
 */

 const isPast = require('date-fns/isPast')
 const parseISO = require('date-fns/parseISO')
 const isWithinInterval = require('date-fns/isWithinInterval')
 const {sortName} = require('./sortName')
 const {groupBy} = require('./groupBy')
 const {compareDates} = require('./compareDates')



 function mergeData(dataObj) {
    //console.log(dataObj)
    //dataObj.bookings.data = dataObj.bookings.data.sort(sortName);
    //dataObj.products.data = dataObj.products.data.sort(sortName);
    //dataObj.sellers.data = dataObj.sellers.data.sort(sortName)
 
    let products = dataObj.products.data;
    let sellers = dataObj.sellers.data;

    let outputObj = dataObj.bookings.data.map((item) => {
        let product = products.find(a => a.id === item.productId)
        let seller = sellers.find(b => b.id === product.sellerId)

        //console.log(product)
        //console.log(item)
        return {
        "id": item.id.substring(0,5).toUpperCase(),
        "productName": product.name,
        "quantity": item.quantity,
        "rate": product.rate,
        "cost": (item.quantity/1000)*Number.parseFloat(product.rate/100).toFixed(2),
        "startDate": item.startDate,
        "endDate": item.endDate,
        "seller": seller.name,
        "sellerId": seller.id,
        "active": !isPast(parseISO(item.endDate)),
        "live": isWithinInterval(Date.now(),{
            start: parseISO(item.startDate),
            end: parseISO(item.endDate)
        })
        }
    })

    let outputGrouped = groupBy(outputObj, "seller")
    let outputGroupedKeys = Object.keys(outputGrouped)

    let outputArr = []
    outputGroupedKeys.forEach(item => {
        let tempObj = {};
        tempObj.name = item;
        tempObj.data = outputGrouped[item].sort(compareDates).filter(a => a.active === true);
        outputArr.push(tempObj)
    })

    outputArr = outputArr.sort(sortName)

    return outputArr;
 }

 module.exports.mergeData = mergeData;