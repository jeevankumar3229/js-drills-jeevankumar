import fs from 'fs';
function createDirectory(directory, noOfFiles){
    fs.mkdir(directory,function(error){
        if(error){
            console.log(error)
        }
        else{
            console.log(directory +" directory created");
        }
    })
    for(let index=1;index<=noOfFiles;index++){
        fs.writeFile('./'+directory+'/test'+index+".json","",function(error){
            if(error){
                console.log(error)
            }
            else{
                console.log("File Created");
            }
        })
    }
}

export {createDirectory};