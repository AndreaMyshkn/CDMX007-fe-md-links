   const fs = require ('fs');
    const file = ('./README.md')



    
    fs.readFile(file,  (err, data)=>{
      if(err){
          console.log(err('ha ocurrido un error'))
      } {
          const convertToString = data.toString().cyan;
        
         console.log(convertToString)
      }})
      
    
    
    