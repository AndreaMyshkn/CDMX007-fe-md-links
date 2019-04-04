const fs = require('fs');
const directory = "./";
const path = require('path');
const links = require('./Links.js')


const readDirectory = () => {
  fs.readdir(directory, (err, files) => {
    if (err) {
      console.log(err('ha ocurrido un error'))
    } {
      files.filter(file => {
        if (path.extname(file) === '.md') {
          fs.readFile(file, 'utf-8', (err, data) => {
            if (err) {
              console.log(err('ha ocurrido un error'))
            } else {
              links.foundLinks(err, data)
            }

          })
        }
      })
    }
  })
}

readDirectory();
module.exports.readDirectory= readDirectory;

 