import { readFiles, convertUpperCase, convertLowerCase, readContents, deleteFiles} from "../problem2.js";
readFiles('lipsum.txt',(data)=>{
    convertUpperCase(data,(filePath)=>{
        convertLowerCase(filePath,(filePath)=>{
            readContents(filePath,(filePath)=>{
                deleteFiles(filePath)
            })
        })
    })
}); 
