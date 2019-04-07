const fs = require('fs');
const routeUser = process.argv[2];
const options = process.argv[3];
const path = require('path');
const links = require('./Links.js')

const readDirectoryToValidate = () => {
  fs.readdir(routeUser, (err, files) => {
    if (err) {
      console.log(err('ha ocurrido un error'))
    } {
      files.filter(file => {
        if (path.extname(file) === '.md') {
          fs.readFile(file, 'utf-8', (err, data) => {
            if (err) {
              console.log(err('ha ocurrido un error'))
            } else {
              links.foundLinksToValidate(err, data)
            }

          })
        }
      })
    }
  })
}

const readDirectoryToStats = () => {
  fs.readdir(routeUser, (err, files) => {
    if (err) {
      console.log(err('ha ocurrido un error'))
    } {
      files.filter(file => {
        if (path.extname(file) === '.md') {
          fs.readFile(file, 'utf-8', (err, data) => {
            if (err) {
              console.log(err('ha ocurrido un error'))
            } else {
              links.foundLinksToStats(err, data)
            }
          })
        }
      })
    }
  })
}

const readDirectoryToValidateAndStats = () => {
  fs.readdir(routeUser, (err, files) => {
    if (err) {
      console.log(err('ha ocurrido un error'))
    } {
      files.filter(file => {
        if (path.extname(file) === '.md') {
          fs.readFile(file, 'utf-8', (err, data) => {
            if (err) {
              console.log(err('ha ocurrido un error'))
            } else {
              links.foundLinksToValidateAndStats(err, data)
            }
          })
        }
      })
    }
  })
}

const optionsFromUser = (options) =>{
  if (options=='--validate'){
    readDirectoryToValidate()
  } else if (options =='--stats'){
    readDirectoryToStats()
  } else if (options=='--stats--validate'){
    readDirectoryToValidateAndStats()
  }
  }
  optionsFromUser(options)

module.exports.readDirectoryToValidate =readDirectoryToValidate;
module.exports.readDirectoryToStats= readDirectoryToStats;
module.exports.readDirectoryToValidateAndStats= readDirectoryToValidateAndStats;

 