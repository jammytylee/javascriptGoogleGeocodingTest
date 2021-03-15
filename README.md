# javascriptGoogleGeocodingTest
This is a project with functional tests against Google Geocoding API. Project is written in javascript

### Test Design Choice
This test project is designed to be Test Data Driven.
Currently, the two positive test sets (Positive tests for Geocoding/Reverse Geocoding) read from test data files testdata/geocodingPositiveTests.json and testdata/reverseGeocodingPositiveTests.json, respectively. The test data is supplied in the file in json format. It is simple to edit and navigate the test data using a text editor like NotePad++ which handles Json formatting and can perform quick sections expansion/collapse.

The reason the tests are designed to be data-driven is based on the nature of the software being tested. Google Geocoding API involves complicated test data and test cases that involve understanding of geographical location, which means the test process will involve manual testing before automation can be written. Why is manual testing necessary? The reason is that doing automation only implies the necessity to figure out what the expected outcome of a set of test input is programmatically. This would mean as part of the automated tests development, it is necessary to write another Geocoding product for verification purpose, which is unrealistic.
Since the test cycle involves running manual tests first and then writing the automation for the manual tests, it is important for the test suite to support quick adding of test cases, preferably without any coding. Supplying test data via a Json file supports this.
Finally, due to the almost-infinite-permutations of possible test inputs for the Geocoding API, it is important to allow as many people as possible to contribute to the test cases. It is impossible for one person or a small QA team to figure out all the relevant test inputs. Using a data-driven model where tests can be added without any knowledge of coding would enable contribution to tests from all technical and non-technical team members.

### Running the tests
Pre-requisite: Node.js 14.16.0 is installed (as of writing 14.16.0 is latest version of Node.js)
1. Clone this repository to your local with Git
2. Open terminal and navigate to the project folder javascriptGoogleGeocodingTest
3. Enter npm install. This will install all the Node.js packages needed for the project.
4. Set the environment variable GOOGLE_GEOCODING_API_KEY to your Goolge Geocoding API key. You will need to be subscribed to the service to have access to the key.
#### In Command Prompt
`setx GOOGLE_GEOCODING_API_KEY "<YOUR_API_KEY>"`
Please note that for Command Prompt, for the environment variable to take effect you will have to close and restart the Command Prompt session.
#### In Powershell
`$env:GOOGLE_GEOCODING_API_KEY = '<YOUR_API_KEY>'`
#### In Bash
`export GOOGLE_GEOCODING_API_KEY="<YOUR_API_KEY>"`

5. Enter npm test in terminal and press enter. Tests should start running.

### Test Outputs
![testoutput](https://github.com/jammytylee/javascriptGoogleGeocodingTest/blob/main/testOutput.png)

### Known Issue/Future Enhancement
Currently, if one test in a suite fails, the whole suite would show as fail. This is likely due to a design issue in the loop that supports the Data Driven architecture.
For now, there is a separate test data file singletesttroubleshooting.json that should be used for test development. By pasting your test data in this file and load this file as test data, you can develop tests one at a time and add test to the real test suite only after you confirmed the test works perfectly.
