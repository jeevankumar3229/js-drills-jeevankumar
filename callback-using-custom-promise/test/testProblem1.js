import {createDirectory, createFiles, deleteAllFilesFromDirectory} from '../problem1.js'
let directory='jsonFilesFolder'
let noOfFiles=5
createDirectory(directory).then(()=>{
    console.log("Directory Created Successfully")
    createFiles(directory,noOfFiles).then(()=>{
        console.log("Successfully Created All the Files")
        deleteAllFilesFromDirectory(directory)
    }).catch(Error=>{
        console.log(Error)
    })
}).catch(Error=>{
    console.log("Error Creating Directory")
})

