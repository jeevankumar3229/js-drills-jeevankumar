import {createDirectory, createFiles, deleteAllFilesFromDirectory} from '../problem1.js'
let directory='jsonFilesFolder'
let noOfFiles=5
createDirectory(directory).then((directory)=>{
    createFiles(directory,noOfFiles).then((directory)=>{
         deleteAllFilesFromDirectory(directory).then((data)=>{
            console.log(data)
         }).catch(Error=>{
            console.log(Error)
         })
    }).catch(Error=>{
        console.log(Error)
    })
}).catch(Error=>{
    console.log(Error)
})

