/**
 * Format Data - A function that will take a number input and format it to a 
 * specific string format
 * @param {Number} data: The number to be formatted
 * @param {String} format: The format to used
 * @returns {String} The format requested in string format
 */

 function FormatData(data, format = 'number') {
     let formatedString = "";

     if(format === 'currency') {
        formatedString = new Intl.NumberFormat(navigator.language, {style: 'currency', currency: 'USD'}).format(data)
     }
     else if(format === 'number') {
         formatedString = new Intl.NumberFormat(navigator.language).format(data)
     }

     return formatedString
 }

 module.exports.FormatData = FormatData;