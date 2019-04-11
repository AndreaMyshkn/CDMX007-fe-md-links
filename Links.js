const searchOnDirectory = require('./readMd.js');
const index = require('./index.js')
const fetch = require('node-fetch');


const foundLinksToValidate = (data) => {
  const regExp = /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[\-;:&=\+\$,\w]+@)?[A-Za-z0-9\.\-]+|(?:www\.|[\-;:&=\+\$,\w]+@)[A-Za-z0-9\.\-]+)((?:\/[\+~%\/\.\w\-_]*)?\??(?:[\-\+=&;%@\.\w_]*)#?(?:[\.\!\/\\\w]*))?)/g
  const foundUrl = data.match(regExp);
  foundUrl.forEach(element => {
    fetch(element)
      .then(response => {
        if (response.status != 404) {
          console.log(element.cyan + " " + response.status + " " + response.statusText.green)
        } else if (response.status == 404) {
          console.log(element.red + " " + response.status + " " + response.statusText.red, )
        }
      })
      .catch(err => console.error(err));
  })
}


const foundLinksToStats = (data) => {
  const regExp2 = /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[\-;:&=\+\$,\w]+@)?[A-Za-z0-9\.\-]+|(?:www\.|[\-;:&=\+\$,\w]+@)[A-Za-z0-9\.\-]+)((?:\/[\+~%\/\.\w\-_]*)?\??(?:[\-\+=&;%@\.\w_]*)#?(?:[\.\!\/\\\w]*))?)/g
  const linksToStats = data.match(regExp2)
  const numberOfLinks = linksToStats.length;
 const obj = [];
  const unique = [];
  linksToStats.forEach(element =>{
     if(!obj[element])
     obj[element] = 0;
     obj[element] += 1;
  }) 
  for (const prop in obj){
    if (obj[prop] = 1) {
      unique.push(prop)
    }
  }
  console.log (`El número de links únicos es ${unique.length}`)
  console.log(`El número de links encontrados es ${numberOfLinks}`)
  

}


const foundLinksToValidateAndStats = (data) => {
  const regExp3 = /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[\-;:&=\+\$,\w]+@)?[A-Za-z0-9\.\-]+|(?:www\.|[\-;:&=\+\$,\w]+@)[A-Za-z0-9\.\-]+)((?:\/[\+~%\/\.\w\-_]*)?\??(?:[\-\+=&;%@\.\w_]*)#?(?:[\.\!\/\\\w]*))?)/g;
  const arrayLinks = data.match(regExp3)
  const object = {};
  const repeatedLinks = [];
  const uniqueLinks = [];
  arrayLinks.forEach(element => {
    if (!object[element])
      object[element] = 0;
    object[element] += 1;
  })
  for (let prop in object) {
    if (object[prop] >= 2) {
      repeatedLinks.push(prop);
    }
    if (object[prop] = 1) {
      uniqueLinks.push(prop)
    }
  }
  arrayLinks.forEach(element=>{
    const broken = [];
    fetch(element)
    .then(response =>{
      if(response.status ==404){
        broken.push(element)
        console.log (broken.length)
      }
    })
  })

  console.log(`Cantidad de links repetidos: ${repeatedLinks.length}`)
  console.log(`Cantidad de links únicos: ${uniqueLinks.length}`)
  console.log(`Total de links:${arrayLinks.length}`)
 
}


module.exports.foundLinksToValidate = foundLinksToValidate;
module.exports.foundLinksToStats = foundLinksToStats;
module.exports.foundLinksToValidateAndStats = foundLinksToValidateAndStats;

