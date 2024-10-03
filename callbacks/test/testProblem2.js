import { readFiles, convertUpperCase, convertLowerCase, sortContents, deleteFiles} from "../problem2.js";
readFiles('lipsum.txt',(data)=>{
    convertUpperCase(data,(filePath)=>{
        convertLowerCase(filePath,(filePath)=>{
            sortContents(filePath,(filePath)=>{
                deleteFiles(filePath)
            })
        })
    })
}); 
