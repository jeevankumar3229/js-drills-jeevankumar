import { convertLowerCase, convertUpperCase, deleteFiles, sortContents, readFiles } from "../problem2.js";
let file = 'lipsum.txt'
let file2 = 'newLipsum.txt'
let file3 = 'filenames.txt'
readFiles(file).then((data) => {
    return convertUpperCase(data)
}).then(() => {
    return convertLowerCase(file2)
}).then((file3) => {
    return sortContents(file3)
}).then((data) => {
    return deleteFiles(data)
}).then(()=>{
    console.log("Successfully completed all the operations")
}).catch(error => {
    console.log(error)
})