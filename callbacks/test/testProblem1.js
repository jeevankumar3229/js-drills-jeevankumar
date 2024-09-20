import {createDirectory ,createFiles,deleteAllFilesFromDirectory} from '../problem1.js'
let noOfFiles=5
createDirectory('jsonFilesFolder',noOfFiles,(directory,noOfFiles)=>{
    setTimeout(()=>{createFiles(directory,noOfFiles,(directory)=>{
        setTimeout(()=>{
            deleteAllFilesFromDirectory(directory)
        },3000)
    })},3000)
    }
)
