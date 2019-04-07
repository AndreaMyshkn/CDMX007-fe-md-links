const fetch = require('node-fetch');
const links = require ('./Links.js');


const validate = (foundUrl) => {
    foundUrl.forEach(element => {
      fetch(element)
        .then(response => {
          if (response.status != 404 ) {
            console.log(element.cyan + " " + response.status + " " + response.statusText.green)
          } else if (response.status == 404) {
            console.log(element.red + " " + response.status + " " + response.statusText.red)
          }
        })
        .catch(err => console.error(err));
    })
  }
  module.exports.validate = validate;