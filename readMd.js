   const fs = require('fs');
   const directory = "./";
   const path = require('path');
   const fetch = require('node-fetch')
  const http = require('http');

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
              fetch(element).then(response => console.log(response.status + ` ${element}`))
              .catch(err => console.error(err));
             })
            
           })
         }
       })
     }
   })

  
  }





module.exports.readDirectory= readDirectory();







  //  foundUrl.forEach(element=>{
  //   for (i in element) {
  //     http.get(element[i], function(res) {
  //         responses.push(res);
  //         completed_requests++;
  //         if (completed_requests == element.length) {
  //             // All download done, process responses array
  //             console.log(responses);
  //         }
  //     });
  // }


  //  })


 
   






   //   const foundLinksOnReadMe = convertToString.split("http").length-1;
   //   console.log(foundLinksOnReadMe)





  
    