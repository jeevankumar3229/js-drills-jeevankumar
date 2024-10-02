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
    let promise=fs.writeFile(fileArray.shift(),"")
    fileArray.forEach(item => {
        promise=promise.then(()=>{
            return fs.writeFile(item,"")
        }).catch(error=>{
            console.log(error)
        })
    })

    return promise;
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
                        console.log(Error)
                    })
                }
                else if (stats.isDirectory()) {
                    fs.rmd(path, { recursive: true }).then(() => {
                        console.log("Successfully Deleted Folder " + item)
                    }).catch(Error => {
                        console.log(Error)
                    })
                }
            }).catch(Error=>{
                console.log(Error)
            })
        })
    }).catch (Error => {
        console.log(Error)
    })
}
export { createDirectory, createFiles, deleteAllFilesFromDirectory }