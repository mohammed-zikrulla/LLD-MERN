const path = require('path');
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
