var fs = require('fs');
var path = require('path');
const prompt = require('prompt-sync')();


const dirname = prompt("Introduce el path del directorio que quieres revisar:");

fs.readdir(dirname, (err, files) => {
    if (err)
      console.log(err);
    else {
        console.log("\nNumber of files by extension:");
        const number_files = [0,0,0,0,0];
        const types_files = ['.PNG', '.jpg', '.jpeg', '.txt','DIR'];
        files.forEach(file => {
            var current_ext = path.extname(file);
            switch (current_ext){
                case '.PNG':
                    number_files[0]++;
                    break;
                case '.jpg':
                    number_files[1]++;
                    break;
                case '.jpeg':
                    number_files[2]++;
                    break;
                case '.txt':
                    number_files[3]++;
                    break;
                case '':
                    number_files[4]++;
            }
        })
        obj = {}
        types_files.forEach((ele, i)=>{
            obj[ele] = number_files[i]
        })
        console.log(obj);
    }
  })


