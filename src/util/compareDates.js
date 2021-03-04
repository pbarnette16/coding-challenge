const compareAsc = require('date-fns/compareAsc')
const parseISO = require('date-fns/parseISO')

/**
 * compareDates - Compare two start dates from two different objects and returns 
 * a number used for sorting
 * @param {Object} a - The first element to be compared with a "Start Date" parameter
 * @param {Object} b - The second element to be compared with a "Start Date" parameter
 * @returns {number} - Returns -1,0,1 based on the comparison of the dates
 */

function compareDates(a, b) {
    return compareAsc(parseISO(a["Start Date"]), parseISO(b["Start Date"]))
}

module.exports.compareDates = compareDates;