import fs from 'fs';
function createDirectory(directory, noOfFiles, callback){
    fs.mkdir(directory,function(error){
        if(error){
            console.log(error)
        }
        else{
            callback(directory,noOfFiles)
        }
    })
}

function createFiles(directory,noOfFiles,callback){
    let counter=0
    for(let index=1;index<=noOfFiles;index++){
        fs.writeFile('./'+directory+'/test'+index+".json","",function(error){
            if(error){
                console.log(error)
            }
            else{
                console.log("Successfully created file test"+index+".json")
                if(index===noOfFiles){
                    callback(directory)
                }
            }
        })
    }
}


function deleteAllFilesFromDirectory(directory){
    let folderContentLength;
    let counter;
    let path='./'+directory
    fs.readdir(path,(error,files)=>{
        if(error){
            console.log(error)
        }
        else{
            folderContentLength=files.length;
            files.forEach((item)=>{
                let path="./"+directory+"/"+item
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
                                    console.log("Successfully Deleted File " +item)
                                }
                            })
                        }
                        else if(stats.isDirectory()){
                            fs.rmd(path,{recursive:true},(error)=>{
                                if(error){
                                    console.log(error)
                                }
                                else{
                                    console.log("Successfully Deleted Folder " +item)
                                }
                            })
                        }
                    }
                })
            })
        }
    })
}

export{createDirectory,createFiles,deleteAllFilesFromDirectory}