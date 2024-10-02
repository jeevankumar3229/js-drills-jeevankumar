import { convertLowerCase, convertUpperCase, deleteFiles, readContents, readFiles} from "../problem2.js";
let file='lipsum.txt'
let file2='newLipsum.txt'
let file3='filenames.txt'
readFiles(file).then((data)=>{
    convertUpperCase(data).then(()=>{
        convertLowerCase(file2).then(()=>{
            readContents(file3).then((data)=>{
                deleteFiles(data).then(()=>{
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