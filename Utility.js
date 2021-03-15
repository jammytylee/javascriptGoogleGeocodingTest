/**
 * Convert test data inputs json object to parameter uri
 * @param {Object} inputJson 
 * @returns {string} parameterUri
 */
 const processInput = (inputJson) =>
 {
     var parameterUri = "";
 
     for (var input in inputJson)
     {
         parameterUri = parameterUri + "&" + input + "=" + encodeURIComponent(inputJson[input]);
     }
 
     if (parameterUri.length > 0)
     {
         parameterUri = parameterUri.substr(1);
     }
 
     return parameterUri;
 }
 
 /**
  * Compare if the two types array are equal.
  * It uses sort before comparison so different order would evaluate to equal
  * @param {Array} array1 
  * @param {Array} array2 
  * @returns {Boolean} true if equal, false otherwise
  */
 const areTypesEqual = (array1, array2) =>
 {
     if (array1.length == array2.length)
     {
         var sortedArray1 = array1.sort();
         var sortedArray2 = array2.sort();
         
         for (var i = 0; i < sortedArray1.length; i++)
         {
             if (sortedArray1[i] != sortedArray2[i])
             {
                 return false;
             }
         }
     }
     else
     {
         return false;
     }
     return true;
 }
 
 /**
  * Compare if two geometry json objects are equal
  * @param {Object} geometry1 
  * @param {Object} geometry2 
  * @returns {Boolean} true if equal, false otherwise
  */
 const areGeometryInfoEqual = (geometry1, geometry2) =>
 {
     if (Object.keys(geometry1).length == Object.keys(geometry2).length)
     {
         return (geometry1.location.lat == geometry2.location.lat &&
         geometry1.location.lng == geometry2.location.lng &&
         geometry1.location_type == geometry2.location_type &&
         geometry1.viewport.northeast.lat == geometry2.viewport.northeast.lat &&
         geometry1.viewport.northeast.lng == geometry2.viewport.northeast.lng &&
         geometry1.viewport.southwest.lat == geometry2.viewport.southwest.lat &&
         geometry1.viewport.southwest.lng == geometry2.viewport.southwest.lng)
     }
     else
     {
         return false;
     }
 }
 
 /**
  * Compare if two address_component json objects are equal
  * @param {Object} address_component1 
  * @param {Object} address_component2 
  * @returns {Boolean} true if equal, false otherwise
  */
 const areAddressComponentsEqual = (address_component1, address_component2) =>
 {
     if (address_component1.length == address_component2.length)
     {
         for (var i = 0; i < address_component1.length; i++)
         {
             targetAddressToCompare = address_component2.filter(address => areTypesEqual(address_component1[i].types, address.types) && address_component1[i].long_name == address.long_name);
             if (targetAddressToCompare.length == 0)
             {
                 return false;
             }
             else
             {
                 if (!(address_component1[i].long_name == targetAddressToCompare[0].long_name && 
                     address_component1[i].short_name == targetAddressToCompare[0].short_name))
                 {
                     return false;
                 }
             }
         }
     }
     else
     {
         return false;
     }
     return true;
 }
 
 /**
  * Verify the array of result json objects are equal
  * @param {Array} results1 
  * @param {Array} results2 
  * @returns {Boolean} true if arrays are equal, false otherwise
  */
 const areResultsEqual = (results1, results2) =>
 {
     if (results1.length == results2.length)
     {
         for(var i = 0; i < results1.length; i++)
         {
             if (results1[i].formatted_address != results2[i].formatted_address ||
             results1[i].place_id != results2[i].place_id ||
             !areTypesEqual(results1[i].types, results2[i].types) || 
             !areGeometryInfoEqual(results1[i].geometry, results2[i].geometry) || 
             !areAddressComponentsEqual(results1[i].address_components, results2[i].address_components))
             {
                 return false;
             }
         }
 
     }
     else
     {
         return false;
     }
 
     return true;
 }

 module.exports = {areResultsEqual, processInput}