import fs from 'fs'

/*
Problem 2:
Using callbacks and the fs module's asynchronous functions, do the following:
1. Read the given file lipsum.txt
2. Convert the content to uppercase & write to a new file. Store the name of the new file in filenames.txt
3. Read the new file and convert it to lower case. Then split the contents into sentences. Then write it to a new file. Store the name of the new file in filenames.txt
4. Read the new files, sort the content, write it out to a new file. Store the name of the new file in filenames.txt
5. Read the contents of filenames.txt and delete all the new files that are mentioned in that list simultaneously.
*/

function readFiles(file,callback){
    let path='./'+file
    let readData="";
    fs.readFile(path,(error,data)=>{
        if(error){
            console.log("Error Reading File")
        }
        else{
            readData=data.toString('utf-8')
        }
    })
    setTimeout(()=>{
        callback(readData)
    },3000)
}

function convertUpperCase(data,callback){    
    let updatedData=data.toUpperCase()
    let newFileName='newLipsum.txt'
    let newFilePath='./'+newFileName
    fs.writeFile(newFilePath,updatedData,(error)=>{
        if(error){
            console.log("Error Occurred")
        }
    })
    fs.writeFile('./filenames.txt',newFileName,(error)=>{
        if(error){
            console.log("Error Occurred")
        }
    })
    setTimeout(()=>{
        callback(newFilePath)
    },3000)
}

function convertLowerCase(filePath, callback){
    let newFileName=""
    let newFilePath=""
    fs.readFile(filePath,(error,data)=>{
        if(error){
            console.log("Error Occurred when Reading File")
        }
        else{
            let updatedData=data.toString('utf-8').toLowerCase()
            let sentenceArray=updatedData.split('.')
            newFileName='newLowerCaseLipsum.txt'
            newFilePath='./'+newFileName
            let fileContent=""
            sentenceArray.forEach((item)=>{
                let item1;
                if(item[-1]!=='.' && item!==""){
                    item1=item+"."+" "
                }
                else{
                    item1=item
                }
                if(sentenceArray.indexOf(item)!=0 && item!=""){
                    item1=item1.substring(1)
                }
                fileContent=fileContent+item1
            })
            fs.writeFile(newFilePath,fileContent,(error)=>{
                if(error){
                    console.log("Error Writing file")
                }
            })
            fs.appendFile('./filenames.txt',"\n"+newFileName,(error)=>{
                if(error){
                    console.log("Error Occurred when Appending Data")
                }
            })

        }
    })
    setTimeout(()=>{
        callback('./filenames.txt')
    },3000)
}

function readContents(filePath, callback){
    fs.readFile(filePath,(error,data)=>{
        if(error){
            console.log("Error Occurred when Reading Filepath "+file)
        }
        else{
            let data1=data.toString('utf-8').split("\n")
            data1.forEach((item)=>{
                fs.readFile('./'+item,(error,data2)=>{
                    if(error){
                        console.log("Error Occurred when Reading File "+item)
                    }
                    else{
                       let data3=data2.toString("utf-8").split(" ")
                       let uniqueData=new Set(data3)
                       let uniqueSet1=new Set()
                       let uniqueArray=[]
                       uniqueData.forEach((item1)=>{
                            if(item1[item1.length-1]===',' || item1[item1.length-1]==='.'){
                                uniqueSet1.add(item1.substring(0,item1.length-1))
                            }
                            else if(item1!==""){
                                uniqueSet1.add(item1)
                            }
                       })
                       uniqueArray=Array.from(uniqueSet1)
                       let sortedData=uniqueArray.sort().join(' ')
                       fs.writeFile('./'+'updated'+item,sortedData,(error)=>{
                        if(error){
                            console.log("Error when writing to File "+item+"1")
                        }
                       })
                       fs.appendFile(filePath,"\n"+'updated'+item,(error)=>{
                        if(error){
                            console.log("Error when Appending data to file")
                        }
                       })
                    }
                })
            })
        }
    })
    setTimeout(()=>{
        callback(filePath)
    },3000)
}

function deleteFiles(filePath){
    fs.readFile(filePath,(error,data)=>{
        if(error){
            console.log("Error Occurred When Reading Filepath "+filePath)
        }
        else{
            data=data.toString('utf-8').split('\n')
            data.forEach((item)=>{
                fs.unlink('./'+item,(error)=>{
                    if(error){
                        console.log("Error while deleting file "+item)
                    }
                    else{
                        console.log("Successfully deleted file "+item)
                    }
                })
            })
        }
    })
}
export {readFiles,convertUpperCase,convertLowerCase,readContents, deleteFiles}