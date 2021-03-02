/**
 * mergeData - Merges the data from the APIs and formats it to the output needed for the table
 * filters out older dates
 * @param {Object} dataObj - The data from the services massaged for output
 * @returns {Object} for display
 */

function sortName (a, b) {
    var nameA = a.name.toUpperCase(); // ignore upper and lowercase
    var nameB = b.name.toUpperCase(); // ignore upper and lowercase
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }

    // names must be equal
    return 0;
}

 function mergeData(dataObj) {
    dataObj.bookings.sort(sortName);
    dataObj.sellers.sort(sortName);
    dataObj.products.sort(sortName)

    console.log(dataObj)

 }

 module.exports.mergeData = mergeData;