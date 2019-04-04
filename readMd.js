const fs = require('fs');
   const directory = "./";
   const path = require('path');
   const fetch = require('node-fetch')


  const readDirectory= ()=>{
   fs.readdir(directory, (err, data) => {
     if (err) {
       console.log(err('ha ocurrido un error'))
     } {
       data.filter(file => {
         if (path.extname(file) === '.md') {
           fs.readFile(file, (err, data) => {
             if (err) {
               console.log(err('ha ocurrido un error'))
             }
             const convertToString = data.toString().cyan;
             const regExp = /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[\-;:&=\+\$,\w]+@)?[A-Za-z0-9\.\-]+|(?:www\.|[\-;:&=\+\$,\w]+@)[A-Za-z0-9\.\-]+)((?:\/[\+~%\/\.\w\-_]*)?\??(?:[\-\+=&;%@\.\w_]*)#?(?:[\.\!\/\\\w]*))?)/g
             const foundUrl = convertToString.match(regExp);
             foundUrl.forEach(element=>{
              fetch(element)
              .then(response => {
                if(response.status==200 && response.ok == true){
                  console.log( `${element.cyan}`+ " "+ response.status +" " + "OK")
                } else if (response.status==404 && response.ok==false){
                  console.log( `${element.red}`+ " " + response.status  + " " + "Fail")
                }
              })
            .catch(err => console.error(err));
             
             })
             
           })
         }
       })
     }
   })

  
  }





module.exports.readDirectory= readDirectory();
