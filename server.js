
//Require https module
const https = require('https');
//Require http module for status codes
const http = require('http');

//Print Error Messages
function printError(error) {
  console.error(error.message);
}

//Function to print message to console
function printMessage(login, public_repos, followers) {
  const message = `${login} has ${public_repos} total repos and ${followers} followers `;
  console.log(message);
}

function get(username) {
  try {
    // Connect to the API URL
    const request = https.get(`https://api.github.com/users/${login}`, response => {
                            if (response.statusCode === 200) {
                              let body = "";
                              // Read the data
                              response.on('data', data => {
                                body += data.toString();
                              });
  
                              response.on('end', () => {
                                try {
                                  // Parse the data
                                  const profile = JSON.parse(body);                            
                                  // Print the data
                                  printMessage(login, public_repos, followers);
                                } catch (error) {
                                  printError(error);
                                }
                              });
                            } else {
                                const message = `There was an error getting the profile for ${login} (${http.STATUS_CODES[response.statusCode]})`;
                                const statusCodeError = new Error(message);
                                printError(statusCodeError);
                            }
                          });
    request.on('error', printError);
  } catch (error) {
    printError(error);
  }
}
                                
module.exports.get = get;                                
                              






