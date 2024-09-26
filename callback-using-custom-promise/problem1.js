import fs from 'fs';
function createDirectory(directory) {
    const promise = new Promise(function (resolve, reject) {
        fs.mkdir(directory, function (error) {
            if (error) {
                reject(directory)
            }
            else {
                resolve(directory)
            }
        })
    })
    return promise
}

function createFiles(directory, noOfFiles) {
    let promiseArray = []
    for (let index = 1; index <= noOfFiles; index++) {
        promiseArray.push(new Promise(function (resolve, reject) {
            fs.writeFile(directory + '/test' + index + ".json", "", function (error) {
                if (error) {
                    reject("Error Creating File test" + index + ".json" + error)
                }
                else {
                    resolve("Successfully created file test" + index + ".json")
                }
            })
        }))
    }
    return Promise.all(promiseArray).then(() => { return directory })


}


function deleteAllFilesFromDirectory(directory) {
    let folderContentLength;
    let path = './' + directory
    const promise = new Promise(function (resolve, reject) {
        fs.readdir(path, (error, files) => {
            if (error) {
                reject("Error Occurred :" + error)
            }
            else {
                resolve(files)
            }
        })
    })
    return promise.then((files) => {
        let promiseArray = []
        folderContentLength = files.length;
        promiseArray=files.map((item) => {
            let path = "./" + directory + "/" + item
            return new Promise(function (resolve, reject) {
                fs.stat(path, (error, stats) => {
                    if (error) {
                        reject(error)

                    }
                    else {
                        resolve(stats)
                    }
                })
            }).then((stats)=>{
                if(stats.isFile()){
                    return new Promise(function(resolve,reject){
                        fs.unlink(path,(error)=>{
                            if(error){
                                reject("Error Deleting File " +item)
                            }
                            else{
                                resolve("Successfully Deleted File " +item)
                            }
                        })
                    })
                }
                else if(stats.isDirectory()){
                    return new Promise(function(resolve,reject){
                        fs.rmd(path,{recursive:true},(error)=>{
                            if(error){
                                reject("Error Deleting Folder" +item)
                            }
                            else{
                                resolve("Successfully Deleted Folder " +item)
                            }
                        })
                    })
                   
                }
            }).then((message)=>{
                console.log(message)
                return
            })
        })
        return Promise.all(promiseArray)
    }).then(()=>{return "Successfully Completed All Operations"})
}

export { createDirectory, createFiles, deleteAllFilesFromDirectory }