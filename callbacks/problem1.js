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



function deleteAllFilesFromDirectory(directory){
    let path='./'+directory
    console.log(path)
    fs.readdir(path,(error,files)=>{
    if(error){
        console.log("Error Occurred :"+error)
    }
    else{
        files.forEach((item)=>{
            let path="./"+directory+"/"+item
            console.log(path)
            fs.stat(path,(error,stats)=>{
                if(error){
                    console.log(error)
                }
                else{
                    if(stats.isFile()){
                        fs.unlink(path,(error)=>{
                            if(error){
                                console.log(error)
                            }
                            else{
                                
                            }
                        })
                    }
                    else if(stats.isDirectory()){
                        fs.rmdir(path,(error)=>{
                            if(error){
                                console.log(error)
                            }
                            else{

                            }
                        })
                    }
                }
            })
        })
    }
 })
}

export{createDirectory,deleteAllFilesFromDirectory}