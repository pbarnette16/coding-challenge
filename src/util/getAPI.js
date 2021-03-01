/**
 * getData - An async function that will return the fetched json data from the service
 * @param {String} dataUrl  - the url of the data to be returned
 * @return {Json} The Json from the service
 */

const getAPI = async (dataUrl)=>{
  return fetch(dataUrl
  ,{
    headers : { 
      'Content-Type': 'application/json',
      'Accept': 'application/json'
     }
  }
  )
    .then(function(response){
      return response.json();
    });
}

module.exports.getAPI = getAPI;