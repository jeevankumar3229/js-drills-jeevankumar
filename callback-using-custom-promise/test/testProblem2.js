import { convertLowerCase, convertUpperCase, deleteFiles, sortContents, readFiles } from "../problem2.js";
let file = 'lipsum.txt'
readFiles(file).then((data) => {
    return convertUpperCase(data)
}).then((fileName) => {
    return convertLowerCase(fileName)
}).then((filePath) => {
    return sortContents(filePath)
}).then((file3) => {
    return deleteFiles(file3)
}).then((data) => {
    for(let i=0;i<data.length;i++){
        console.log(data[i])
    }
}).catch(error => {
    console.log(error)
})

