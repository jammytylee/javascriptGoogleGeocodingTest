const fetch = require('node-fetch');

var googleApiKey = process.env.GOOGLE_GEOCODING_API_KEY;
var apiKey = googleApiKey;
var baseUrl = 'https://maps.googleapis.com/maps/api/geocode/';
var outputFormat = 'json';

const getGeocode = async(parameter) =>
{
    var url = baseUrl + outputFormat + '?' + parameter + '&key=' + apiKey;
    var response = await fetch(url);
    var responseContent = await response.json();
    return responseContent;
}

module.exports = {getGeocode}