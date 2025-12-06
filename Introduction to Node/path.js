const path = require('path');
const fs = require('fs');
// console.log(path);

// ----BASENAME AND EXTNAME----- //

//basename
const fileBs = path.basename('f2.txt');
console.log(fileBs); // f2.txt

//extname
const extName = path.extname('f2.txt');
console.log(extName); // .txt

//current directory name 
//  syntax : __dirname
console.log(__dirname);

//current filename 
//  syntax : __filename
console.log(__filename);

//where are these used?
// => to maintain paths, OS management

//EXERCISE
// copy the file from one directory and paste it inside another (myDirectory1 to myDirectory2)

//procedure -> first copy the path of the source file and join its basename with the destination foleder.

const srcFilePath = '/Users/zikrulla/Documents/LLD-MERN/Introduction to Node/myDirectory1/f8.txt'
const destForlderPath = '/Users/zikrulla/Documents/LLD-MERN/Introduction to Node/myDirectory2'

const srcFileBaseName = path.basename(srcFilePath);

const newPath = path.join(destForlderPath, srcFileBaseName);

// copy to new path we created
fs.copyFileSync(srcFilePath, newPath);
