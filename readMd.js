const fs = require('fs');
const directory = "./";
const path = require('path');
const fetch = require('node-fetch')


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
            } else{
              foundLinks(err, data)
            }
          
          })
        }
      })
    }
  })
}

readDirectory();


 
const foundLinks = (err, data)=>{
  if (err) {
    console.log(err);
} else {
  const regExp = /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[\-;:&=\+\$,\w]+@)?[A-Za-z0-9\.\-]+|(?:www\.|[\-;:&=\+\$,\w]+@)[A-Za-z0-9\.\-]+)((?:\/[\+~%\/\.\w\-_]*)?\??(?:[\-\+=&;%@\.\w_]*)#?(?:[\.\!\/\\\w]*))?)/g
  const foundUrl = data.match(regExp);
  foundUrl.forEach(element => {
    fetch(element)
      .then(response => {
        if (response.status == 200) {
          console.log(`${element.cyan}` + " " + response.status + " " + response.statusText)
        } else if (response.status == 404) {
          console.log(`${element.red}` + " " + response.status + " " + response.statusText)
        }
      })
      .catch(err => console.error(err));
  })
   }}




