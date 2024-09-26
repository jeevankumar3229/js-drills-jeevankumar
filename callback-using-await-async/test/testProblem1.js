import {createDirectory ,createFiles,deleteAllFilesFromDirectory} from '../problem1.js'
let noOfFiles=5
let directory='jsonFilesFolder'
await createDirectory(directory)
console.log("Successfully created Directory")
await createFiles(directory,noOfFiles)
console.log("Successfully Created Files")
await deleteAllFilesFromDirectory(directory)
console.log("Successfully Deleted All Files")
