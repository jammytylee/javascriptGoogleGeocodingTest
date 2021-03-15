const GeocodingClient = require("./GeocodingClient");
const Utility = require("./Utility");
const fs = require('fs');

describe('Positive tests for Geocoding', () => {

    var testCases;
    try
    {
        var data = fs.readFileSync('./testdata/geocodingPositiveTests.json', 'UTF-8');
        data = data.replace(/(\r\n|\n|\r|\t)/gm, "");
        testCases = JSON.parse(data);
    }
    catch(err)
    {
        console.error(err);
        return;
    }

    for (var i = 0; i < testCases.length; i++)
    {
        var testDescription = testCases[i].testDescription;
        var urlParameters = Utility.processInput(testCases[i].inputs);
        var testCaseExpected = testCases[i].expected;

        it (testDescription, async() => {
            var response = await GeocodingClient.getGeocode(urlParameters);
            expect(response.status).toBe(testCaseExpected.status);

            var actualResults = response.results;
            var expectedResults = testCaseExpected.results;
            expect(Utility.areResultsEqual(actualResults, expectedResults)).toBe(true);
        });
    }
});


describe('Positive tests for Reverse Geocoding', () => {

    var testCases;
    try
    {
        var data = fs.readFileSync('./testdata/reverseGeocodingPositiveTests.json', 'UTF-8');
        data = data.replace(/(\r\n|\n|\r|\t)/gm, "");
        testCases = JSON.parse(data);
    }
    catch(err)
    {
        console.error(err);
        return;
    }

    for (var i = 0; i < testCases.length; i++)
    {
        var testDescription = testCases[i].testDescription;
        var urlParameters = Utility.processInput(testCases[i].inputs);
        var testCaseExpected = testCases[i].expected;

        it (testDescription, async() => {
            var response = await GeocodingClient.getGeocode(urlParameters);
            expect(response.status).toBe(testCaseExpected.status);
            expect(response.plus_code.compound_code).toBe(testCaseExpected.plus_code.compound_code);
            expect(response.plus_code.global_code).toBe(testCaseExpected.plus_code.global_code);

            var actualResults = response.results;
            var expectedResults = testCaseExpected.results;
            expect(Utility.areResultsEqual(actualResults, expectedResults)).toBe(true);
        });
    }
});
