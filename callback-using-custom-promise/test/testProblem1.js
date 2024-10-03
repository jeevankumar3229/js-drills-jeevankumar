import { createDirectory, createFiles, deleteAllFilesFromDirectory } from '../problem1.js'
let directory = 'jsonFilesFolder'
let noOfFiles = 5
createDirectory(directory).then((directory) => {
    return createFiles(directory, noOfFiles)
}).then((directory) => {
    return deleteAllFilesFromDirectory(directory)
}).then((data) => {
    console.log(data)
}).catch(error => {
    console.log(error)
})
