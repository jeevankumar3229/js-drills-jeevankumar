import { readFiles, convertUpperCase, convertLowerCase, readContents, deleteFiles} from "../problem2.js";
let file1='lipsum.txt'
let data= await readFiles(file1)
let file= await convertUpperCase(data)
file=await convertLowerCase(file)
file=await readContents(file)
await deleteFiles(file)
console.log("Successfully completed All the Operations")