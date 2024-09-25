import fs from 'fs/promises';
function createDirectory(directory) {
    return fs.mkdir(directory)
}
function createFiles(directory, noOfFiles) {
    let counter = 0
    let fileArray = []
    for (let index = 1; index <= noOfFiles; index++) {

        fileArray.push('./' + directory + '/test' + index + ".json")
    }
    let writePromise = fileArray.map(item => {
        return fs.writeFile(item, "")
    })

    return Promise.all(writePromise)
}

function deleteAllFilesFromDirectory(directory) {
    let folderContentLength;
    let path = './' + directory
    fs.readdir(directory).then((files) => {
        folderContentLength = files.length;
        files.forEach((item) => {
            let path = "./" + directory + "/" + item
            fs.stat(path).then((stats) => {
                if (stats.isFile()) {
                    fs.unlink(path).then(() => {
                        console.log("Successfully Deleted File " + item)
                    }).catch(Error => {
                        console.log("Error Deleting File")
                    })
                }
                else if (stats.isDirectory()) {
                    fs.rmd(path, { recursive: true }).then(() => {
                        console.log("Successfully Deleted Folder " + item)
                    }).catch(Error => {
                        console.log("Error Deleting Folder")
                    })
                }
            })
        })
    }).catch (Error => {
        console.log("Error Reading File")
    })
}
export { createDirectory, createFiles, deleteAllFilesFromDirectory }