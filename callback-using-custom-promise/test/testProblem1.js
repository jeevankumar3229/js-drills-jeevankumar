import {createDirectory, createFiles, deleteAllFilesFromDirectory} from '../problem1.js'
let directory='jsonFilesFolder'
let noOfFiles=5
createDirectory(directory).then((directory)=>{
    console.log("Directory Created Successfully")
    createFiles(directory,noOfFiles).then((directory)=>{
         console.log("Successfully Created All the Files")
         deleteAllFilesFromDirectory(directory).then((data)=>{
            console.log(data)
         })
    }).catch(Error=>{
        console.log(Error)
    })
}).catch(Error=>{
    console.log("Error Creating Directory")
})

