const fs = require('fs')

// // Reading a file

// const readFile = fs.readFileSync('file1.txt')
// console.log("File 1 Content : " + readFile) 

// // Writing a file

// fs.writeFileSync('file2.txt', "I am writing content in File 2")
// console.log("Written in File")

// // Appending in a File

// fs.appendFileSync('file2.txt', "This is Extra Content that I am Appending !")
// console.log("Appended in File 2 !")

// // Deleting a File

// // fs.unlinkSync('file3.txt')

// // Writing in a File which is Not yet Created

// fs.writeFileSync('file3.txt', "I am new File 3 !")
// console.log("Created & Written in new File 3 !")









// FS Modules With Directories

// Creating a Directory

// fs.mkdirSync('myDirectory')
// console.log("Directory has been Created !")


// Check the Content inside of the Directory

let folderPath = 'D:\\PROGRAMS\\NodeJS Practise\\1_Node_Module_System\\myDirectory'
let folderContent = fs.readdirSync(folderPath)
console.log("Folder Content : ", folderContent)

// Check if the Directory Exist or not 

let doesExist = fs.existsSync('myDirectory')
console.log(doesExist)


// Deleting a Directory

fs.rmdirSync('myDirectory')
console.log('Directory has been Deleted !')