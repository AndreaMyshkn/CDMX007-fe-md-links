const fs = require('fs');
const path = require('path');
const routeUser = process.argv[2];
const options = process.argv[3];
const links = require('./Links.js');


const readDirectory= () => {
  return new Promise((resolve, reject) => {
    fs.readdir(routeUser, (err, files) => {
      if (err) {
        (err('Falló la lectura'))
      } else {
        files.filter(element => {
          if (path.extname(element) === '.md') {
            fs.readFile(element, 'utf-8', (err, data) => {
              if (err) {
                reject(err('Falló la lectura'))
              } else {
                resolve(data)

              }
            })
          }
        })
      }
    })
  })
}

const optionsFromUser = (options) => {
  if (options === '--validate') {
    (readDirectory())
    .then(data => links.foundLinksToValidate(data))
      .catch(err => console.log(err))
  } else if (options === '--stats') {
    (readDirectory())
    .then(data => links.foundLinksToStats(data))
      .catch(err => console.log(err))
  } else if (options === '--stats--validate') {
    (readDirectory())
    .then(data => links.foundLinksToValidateAndStats(data))
      .catch(err => console.log(err))
  }
}

optionsFromUser(options)


module.exports.readDirectory = readDirectory;