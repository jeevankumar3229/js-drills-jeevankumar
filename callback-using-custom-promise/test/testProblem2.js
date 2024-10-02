import { convertLowerCase,convertUpperCase,deleteFiles,readContents, readFiles} from "../problem2.js";
let file='lipsum.txt'
let file3='filenames.txt'
readFiles(file).then((data)=>{
    convertUpperCase(data).then((fileName)=>{
        convertLowerCase(fileName).then((filePath)=>{
             readContents(filePath).then(()=>{
                deleteFiles(file3).then(()=>{
                    console.log("Successfully completed All the Operations")
                }).catch(Error=>{
                    console.log(Error)
                })
             }).catch(Error=>{
                console.log(Error)
             })
        }).catch(Error=>{
            console.log(Error)
        })
    }).catch(Error=>{
        console.log(Error)
    })

}).catch(Error=>{
    console.log(Error)
})
    
