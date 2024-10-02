import {createDirectory, createFiles, deleteAllFilesFromDirectory} from '../problem1.js'
let directory='jsonFilesFolder'
let noOfFiles=5
createDirectory(directory).then(()=>{
    createFiles(directory,noOfFiles).then(()=>{
        deleteAllFilesFromDirectory(directory)
    }).catch(error=>{
        console.log(error)
    })
}).catch(error=>{
    console.log(error)
})

