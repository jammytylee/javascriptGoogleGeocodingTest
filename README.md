# javascriptGoogleGeocodingTest
This is a project with functional tests against Google Geocoding API. Project is written in javascript

### Test Design Choice

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
