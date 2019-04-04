const searchOnDirectory = require('./readMd.js');
const index = require('./index.js')
const fetch = require('node-fetch');
const validateLinks = require('./validateLinks.js')



const foundLinks = (err, data) => {
  if (err) {
    console.log(err);
  } else {
    const regExp = /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[\-;:&=\+\$,\w]+@)?[A-Za-z0-9\.\-]+|(?:www\.|[\-;:&=\+\$,\w]+@)[A-Za-z0-9\.\-]+)((?:\/[\+~%\/\.\w\-_]*)?\??(?:[\-\+=&;%@\.\w_]*)#?(?:[\.\!\/\\\w]*))?)/g
    const foundUrl = data.match(regExp);
    validateLinks.validate(foundUrl);
  }
}



module.exports.foundLinks = foundLinks;





