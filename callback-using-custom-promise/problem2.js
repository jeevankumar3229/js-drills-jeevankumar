import fs from 'fs'

/*
Problem 2:
Using callbacks and the fs module's asynchronous functions, do the following:
1. Read the given file lipsum.txt
2. Convert the content to uppercase & write to a new file. Store the name of the new file in filenames.txt
3. Read the new file and convert it to lower case. Then split the contents into sentences. Then write it to a new file. Store the name of the new file in filenames.txt
4. Read the new files, sort the content, write it out to a new file. Store the name of the new file in filenames.txt
5. Read the contents of filenames.txt and delete all the new files that are mentioned in that list simultaneously.
*/

function readFiles(file) {
    let path = './' + file
    let readData = "";
    const promise = new Promise(function (resolve, reject) {
        fs.readFile(path, (error, data) => {
            if (error) {
                reject(error)
            }
            else {
                readData = data.toString('utf-8')
                resolve(readData)
            }
        })
    })
    return promise
}

function convertUpperCase(data) {
    let updatedData = data.toUpperCase()
    let newFileName = 'newLipsum.txt'
    let newFilePath = './' + newFileName
    return new Promise(function (resolve, reject) {
        fs.writeFile(newFilePath, updatedData, (error) => {
            if (error) {
                reject(error)
            } else {
                resolve("Success")
            }
        })
    }).then(() => {
        return new Promise(function (resolve, reject) {
            fs.writeFile('./filenames.txt', newFileName, (error) => {
                if (error) {
                    reject(error)
                }
                else {
                    resolve(newFileName)
                }
            })
        })
    })
}

function convertLowerCase(filePath) {
    let newFileName = ""
    let newFilePath = ""
    return new Promise(function (resolve, reject) {
        fs.readFile(filePath, (error, data) => {
            if (error) {
                reject(error)
            }
            else {
                resolve(data)
            }
        })
    }).then((data) => {
        let updatedData = data.toString('utf-8').toLowerCase()
        let sentenceArray = updatedData.split('.')
        newFileName = 'newLowerCaseLipsum.txt'
        newFilePath = './' + newFileName
        let fileContent = ""
        sentenceArray.forEach((item) => {
            let item1;
            if (item[-1] !== '.' && item !== "") {
                item1 = item + "." + " "
            }
            else {
                item1 = item
            }
            if (sentenceArray.indexOf(item) != 0 && item != "") {
                item1 = item1.substring(1)
            }
            fileContent = fileContent + item1
        })
        return fileContent
    }).then((fileContent) => {
        return new Promise(function (resolve, reject) {
            fs.writeFile(newFilePath, fileContent, (error) => {
                if (error) {
                    reject(error)
                }
                else {
                    resolve(newFileName)
                }
            })
        })
    }).then((newFileName) => {
        return new Promise(function (resolve, reject) {
            fs.appendFile('./filenames.txt', "\n" + newFileName, (error) => {
                if (error) {
                    reject(error)
                }
                else {
                    resolve('./filenames.txt')
                }
            })
        })
    })
}

function readContents(filePath) {
    return new Promise(function (resolve, reject) {
        fs.readFile(filePath, (error, data) => {
            if (error) {
                reject(error)
            }
            else {
                resolve(data)
            }
        })
    }).then((data) => {
        let promiseArray = []
        let data1 = data.toString('utf-8').split("\n")
        promiseArray = data1.map((item) => {
            return new Promise(function (resolve, reject) {
                fs.readFile('./' + item, (error, data2) => {
                    if (error) {
                        reject(error)
                    }
                    else {
                        resolve(data2)
                    }
                })
            }).then((data2) => {
                let data3 = data2.toString("utf-8").split(" ")
                let uniqueData = new Set(data3)
                let uniqueSet1 = new Set()
                let uniqueArray = []
                uniqueData.forEach((item1) => {
                    if (item1[item1.length - 1] === ',' || item1[item1.length - 1] === '.') {
                        uniqueSet1.add(item1.substring(0, item1.length - 1))
                    }
                    else if (item1 !== "") {
                        uniqueSet1.add(item1)
                    }
                })
                uniqueArray = Array.from(uniqueSet1)
                let sortedData = uniqueArray.sort().join(' ')
                return sortedData
            }).then((sortedData) => {
                return new Promise(function (resolve, reject) {
                    fs.writeFile('./' + 'updated' + item, sortedData, (error) => {
                        if (error) {
                            reject(error)
                        }
                        else {
                            resolve(filePath)
                        }
                    })
                })
            }).then((filePath) => {
                new Promise(function (resolve, reject) {
                    fs.appendFile(filePath, "\n" + 'updated' + item, (error) => {
                        if (error) {
                            reject(error)
                        }
                        else {
                            resolve("Success")
                        }
                    })
                })
            })
        })
        return Promise.all(promiseArray)
    })
}



function deleteFiles(filePath){
    return new Promise(function(resolve,reject){
        fs.readFile(filePath,(error,data)=>{
            if(error){
                reject(error)
            }
            else{
                resolve(data)
            }
        })
    }).then((data)=>{
        data=data.toString('utf-8').split('\n')
        let promiseArray=[]
        data.forEach((item)=>{
            promiseArray.push(new Promise(function(resolve,reject){
                fs.unlink('./'+item,(error)=>{
                    if(error){
                        reject(error)
                    }
                    else{
                        resolve("Successfully deleted file "+item)
                    }
                })
            }))
        })
        return Promise.all(promiseArray)
    })
}
export { readFiles, convertUpperCase, convertLowerCase,readContents, deleteFiles }
