   const fs = require ('fs');
    const file = ('./README.md')
    const path = "./";


    
    fs.readFile(file,  (err, data)=>{
      if(err){
          console.log(err('ha ocurrido un error'))
      } {
          const convertToString = data.toString().cyan;

        //   const foundLinksOnReadMe = convertToString.split("http").length-1;
        //   console.log(foundLinksOnReadMe)
        console.log(convertToString)
     
 
      }})
      
  
      //Leer todos los archivos del directorio
  const readDir = fs.readdirSync(path);
 
   console.log(readDir)

    
    