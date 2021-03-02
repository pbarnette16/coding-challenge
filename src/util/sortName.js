/**
 * sortName: Sorts a list of names in ascending order
 * @param {object} a - Object to compare with a name attribute 
 * @param {object} b - Object to compare with a name attribute
 * @returns {number} - Returns -1, 1, 0 depending on if its less than, greater than, equal to
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

module.exports.sortName = sortName;