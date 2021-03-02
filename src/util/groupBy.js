/**
 * groupBy - Groups an array based on a property of the array
 * @param {Array} objectArray - An array which you would like grouped based on a property
 * @param {String} property - A property of the objects in the array
 * @returns {Object}  - An object which will be grouped by the property
 */

function groupBy(objectArray, property) {
    return objectArray.reduce(function (acc, obj) {
      let key = obj[property]
      if (!acc[key]) {
        acc[key] = []
      }
      acc[key].push(obj)
      return acc
    }, {})
  }

  module.exports.groupBy = groupBy;