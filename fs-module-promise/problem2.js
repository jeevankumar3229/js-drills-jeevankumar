import fs from 'fs/promises'

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
    return fs.readFile(path)
}

function convertUpperCase(data) {
    let updatedData = data.toString().toUpperCase()
    let newFileName = 'newLipsum.txt'
    let newFilePath = './' + newFileName
    return fs.writeFile(newFilePath, updatedData).then(() => {
        return fs.writeFile('./filenames.txt', newFileName)
    })
}

function convertLowerCase(filePath) {
    let newFileName = 'newLowerCaseLipsum.txt'
    let newFilePath = './' + newFileName
    return fs.readFile(filePath).then((data) => {
        let updatedData = data.toString('utf-8').toLowerCase()
        let sentenceArray = updatedData.split('.')
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
        return fs.writeFile(newFilePath, fileContent)
    }).then(() => {
        return fs.appendFile('./filenames.txt', "\n" + newFileName)
    }).then(()=>{
        return newFilePath;
    })
}




function sortContents(filePath) {
    return fs.readFile(filePath).then((data) => {
        let data3 = data.toString("utf-8").split(" ");
        let uniqueData = new Set(data3);
        let uniqueSet1 = new Set();
        let uniqueArray = [];
        uniqueData.forEach((item1) => {
            if (item1[item1.length - 1] === ',' || item1[item1.length - 1] === '.') {
                uniqueSet1.add(item1.substring(0, item1.length - 1));
            } else if (item1 !== "") {
                uniqueSet1.add(item1);
            }
        });
        uniqueArray = Array.from(uniqueSet1);
        const sortedData = uniqueArray.sort().join(' ');
        return fs.writeFile('./sortingFile.txt', sortedData);
    }).then(() => {
        return fs.appendFile('./filenames.txt', "\n" +'sortingFile.txt')
    }).then(() => {
        return fs.readFile('./filenames.txt');
    }).then((data)=>{
        return data.toString()
    })
}

function deleteFiles(data) {
    data = data.toString('utf-8').split('\n')
    let promiseArray = data.map((item) => {
        return fs.unlink('./' + item)
    })
    return promiseArray.reduce((acc, item) => {
        return acc.then(() => item);
    });

}
export { readFiles, convertUpperCase, convertLowerCase, sortContents, deleteFiles }