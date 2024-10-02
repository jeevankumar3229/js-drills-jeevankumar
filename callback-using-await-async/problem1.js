
import fs from 'fs/promises';
async function createDirectory(directory) {
    try {
        await fs.mkdir(directory)
    }
    catch (error) {
        throw error
    }
}


async function createFiles(directory, noOfFiles) {
    try {
        let counter = 0
        for (let index = 1; index <= noOfFiles; index++) {
            await fs.writeFile('./' + directory + '/test' + index + ".json", "")
        }
    }
    catch (error) {
        throw error
    }
}


async function deleteAllFilesFromDirectory(directory) {
    try {
        let folderContentLength;
        let counter;
        let path = './' + directory
        let files = await fs.readdir(path)
        for(const item of files) {
            let path = "./" + directory + "/" + item
            let stats = await fs.stat(path)
            if (stats.isFile()) {
                fs.unlink(path)
            }
            else if (stats.isDirectory()) {
                fs.rmd(path, { recursive: true })
            }
        }
    }
    catch (error) {
        throw error
    }
}



export { createDirectory, createFiles, deleteAllFilesFromDirectory }