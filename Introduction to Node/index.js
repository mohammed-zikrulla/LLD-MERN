const fs = require('fs');


// read file
const data = fs.readFileSync('f1.txt')

console.log("this is f1 ->" + data);


// write file 
fs.writeFileSync('f3.txt', "this is the new content of f3");

console.log("f3 " + fs.readFileSync('f3.txt'));


// update file 
fs.appendFileSync("f3.txt", " appended text ");

console.log("f3 " + fs.readFileSync('f3.txt'));

// delete a file 
fs.unlinkSync('f2.txt');

console.log('file deleted');

// -- FS MODULE FOR DIRECTORIES --- \\ -> [DIRECTORY OPERATIONS]

