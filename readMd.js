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
            // console.log(convertToString)
             const regExp = /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[\-;:&=\+\$,\w]+@)?[A-Za-z0-9\.\-]+|(?:www\.|[\-;:&=\+\$,\w]+@)[A-Za-z0-9\.\-]+)((?:\/[\+~%\/\.\w\-_]*)?\??(?:[\-\+=&;%@\.\w_]*)#?(?:[\.\!\/\\\w]*))?)/g
             const foundUrl = convertToString.match(regExp);
             const numberOfUrl = foundUrl.length;
             console.log(foundUrl)
             console.log(numberOfUrl)
        
           })
         }
       })
     }
   })

  
  }


  

readDirectory();











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




// const https = require('https')
//    const fs = require('fs');
//    const directory = "./";
//    const path = require('path');
//    const fetch = require('node-fetch')

//    fs.readdir(directory, (err, data) => {
//      if (err) {
//        console.log(err('ha ocurrido un error'))
//      } {
//        data.filter(file => {
//          if (path.extname(file) === '.md') {
//            fs.readFile(file, (err, data) => {
//              if (err) {
//                console.log(err('ha ocurrido un error'))
//              }
//              const convertToString = data.toString().cyan;
//             // console.log(convertToString)
//              const regExp = /(((https?:\/\/)|(www\.))[^\s]+)/g;
//              const foundUrl = convertToString.match(regExp);
//              fetch(foundUrl).then((res)=>{
//               if (res.status >= 200 && res.status < 300) {
//                 foundUrl.status = res.status;
//                 foundUrl.message = res.statusText; 
//                 resolve(foundUrl); 
//                 https.get(foundUrl,res=>{
//                   console.log(res.statusCode)
//                 }
//                  )            
//               } 
               
//              })
          
//             //  const numberOfUrl = foundUrl.length;
//             //  console.log(foundUrl)
//             //  console.log(numberOfUrl)
//            })
//          }
//        })
//      }
//    })

  
    