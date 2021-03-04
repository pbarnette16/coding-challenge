const config = require('../config/config.json');
const {getAPI} = require('./getAPI');
const parseISO = require('date-fns/parseISO')
const differenceInCalendarDays = require('date-fns/differenceInCalendarDays')

/**
 * getData - A function to return the data from the services and put them in local storage
 * @param {boolean} forceUpdate - Boolean used to force 
 * @returns {Object} Object containing the data from the services
 */

 async function getData(forceUpdate = false) {
    let bookings, sellers, products = [];
    const baseUrl = config.baseURL;
    const endPoints = config.endPoints;

    // if no data in local storage or we want to force an update 
    // of all the data
    if(!localStorage.getItem('bookings') || forceUpdate) {
        
        //console.log('Get fresh data');
        [bookings, sellers, products]  = await Promise.allSettled([getAPI(baseUrl+endPoints.bookings),
        getAPI(baseUrl+endPoints.sellers), getAPI(baseUrl+endPoints.products)])
        
        // store in local storage
        localStorage.setItem('bookings', JSON.stringify(bookings));
        localStorage.setItem('sellers', JSON.stringify(sellers));
        localStorage.setItem('products', JSON.stringify(products));
    }
    else {
        
        bookings = JSON.parse(localStorage.getItem('bookings'));
        sellers = JSON.parse(localStorage.getItem('sellers'));
        products = JSON.parse(localStorage.getItem('products'));

        // Get the data from local storage, refresh if it is old data
        if(differenceInCalendarDays(parseISO(bookings.updatedAt), Date.now()) > 1) {
            bookings = getAPI(baseUrl + endPoints.bookings)
            localStorage.setItem('bookings', bookings)
        }
    }

    return {
        bookings: bookings,
        sellers: sellers,
        products: products
    }

 }

 module.exports.getData = getData;