import { createDirectory, createFiles, deleteAllFilesFromDirectory } from '../problem1.js'
let directory = 'jsonFilesFolder'
let noOfFiles = 5
createDirectory(directory).then(() => {
    return createFiles(directory, noOfFiles)
}).then(() => {
    deleteAllFilesFromDirectory(directory)
}).catch(error => {
    console.log(error)
})

