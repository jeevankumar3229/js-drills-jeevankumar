import { createDirectory, createFiles, deleteAllFilesFromDirectory } from '../problem1.js'
let noOfFiles = 5
createDirectory('jsonFilesFolder', noOfFiles, (directory, noOfFiles) => {
    createFiles(directory, noOfFiles, (directory) => {
        deleteAllFilesFromDirectory(directory)
    })
})
