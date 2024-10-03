import { readFiles, convertUpperCase, convertLowerCase, sortContents, deleteFiles } from "../problem2.js";
try {
    let file1 = 'lipsum.txt'
    let data = await readFiles(file1)
    let file = await convertUpperCase(data)
    file = await convertLowerCase(file)
    file = await sortContents(file)
    await deleteFiles(file)
}
catch (error) {
    console.log(error)
}