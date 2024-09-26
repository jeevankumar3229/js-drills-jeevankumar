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

async function readFiles(file) {
    try {
        let path = './' + file
        let readData = "";
        const data = await fs.readFile(path)
        readData = data.toString()
        return readData;
    }
    catch (Error) {
        console.log(Error)
    }
}

async function convertUpperCase(data) {
    try {
        let updatedData = data.toUpperCase()
        let newFileName = 'newLipsum.txt'
        let newFilePath = './' + newFileName
        await fs.writeFile(newFilePath, updatedData)
        await fs.writeFile('./filenames.txt', newFileName)
        return newFileName;
    }
    catch (Error) {
        console.log(Error)
    }
}

async function convertLowerCase(filePath) {
    try {
        let newFileName = ""
        let newFilePath = ""
        const data = await fs.readFile(filePath)
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
        await fs.writeFile(newFilePath, fileContent)
        await fs.appendFile('./filenames.txt', "\n" + newFileName)
        return './filenames.txt'
    }
    catch (Error) {
        console.log(Error)
    }


}

async function readContents(filePath) {
    try {
        let data = await fs.readFile(filePath)
        let data1 = data.toString('utf-8').split("\n")
        for (const item of data1) {
            const data2 = await fs.readFile('./' + item)
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
            await fs.writeFile('./' + 'updated' + item, sortedData)
            await fs.appendFile(filePath, "\n" + 'updated' + item)

        }
        return filePath
    }
    catch (Error) {
        console.log(Error)
    }
}

async function deleteFiles(filePath) {
    try {
        let data=await fs.readFile(filePath)
        data = data.toString('utf-8').split('\n')
        for(const item of data){
            await fs.unlink('./' + item)
        }
    }
    catch (Error) {
        console.log(Error)
    }

}
export { readFiles, convertUpperCase, convertLowerCase, readContents, deleteFiles }