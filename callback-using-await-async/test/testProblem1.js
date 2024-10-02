import { createDirectory, createFiles, deleteAllFilesFromDirectory } from '../problem1.js'
let noOfFiles = 5
let directory = 'jsonFilesFolder'
try {
    await createDirectory(directory)
    console.log("Successfully created Directory")
    await createFiles(directory, noOfFiles)
    console.log("Successfully Created Files")
    await deleteAllFilesFromDirectory(directory)
    console.log("Successfully Deleted All Files")
}
catch (error) {
    console.log(error)
}
