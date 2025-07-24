// using require

// const add = require("./add.js")
// console.log(add(11,22));
// console.log(add(22,10));

// using import and export
// import add from "./add.js"
// console.log(add(22,10));

//path

// const path = require("path");
// // console.log(__filename);
// console.log(path.dirname(__filename));
// console.log(path.extname("myfile.txt"));

//moment

// const moment = require("moment");

// console.log(moment().format("DD-MM-YYYY HH:MM"));
// console.log(moment().add(7,"days").format("DD-MM-YYYY HH:MM"));
// console.log(moment().format("dddd"))
// console.log(moment());

// fs
// const fs = require("fs");
// fs.writeFile("test.txt","hello everyone!!how r u..??",function(err){
//     if(err) throw err;
//     console.log("file saved successfully")
// });

// fs.readFile("test.txt","utf8",function(err,data){
//     if(err) throw err;
//     console.log("file content:",data);
// })

const fs = require('fs').promises;

async function appendToFile() {
  try {
    const logEntry = `i am fine and u...??\n`;
    await fs.appendFile('test.txt', logEntry, 'utf8');
    console.log('new content');
  } catch (err) {
    console.error('Error appending to file:', err);
  }
}
appendToFile();

const path = require('path');

// Get filename from a path
const filename = path.basename('/users/docs/file.txt');
console.log(filename);

// Get filename without extension
const filenameWithoutExt = path.basename('/users/docs/file.txt', '.txt');
console.log(filenameWithoutExt);

