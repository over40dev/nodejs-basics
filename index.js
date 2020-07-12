// Note: using 'var' instead of 'const' so all example code can be left
// since 'var' allows for redefing where 'let' and 'const' do not.

console.log('hello world');

console.log(process.platform);

// Step 5 - working with events

process.on('exit', function() {
  console.log('done')
});

var { EventEmitter } = require('events');
var eventEmitter = new EventEmitter();

eventEmitter.on('lunch', () => {
  console.log('yum 🌭');
});

eventEmitter.emit('lunch');
eventEmitter.emit('lunch');


// Step 6 - working with file system`
var {readFile, readFileSync} = require('fs');

// Blocking - (utf-8 is the encoding type)
var txt = readFileSync('hello.txt', 'utf-8');
console.log(txt);

// Blocking - (utf-8 is the encoding type)
// async - when done, callback is executed.
// 3rd argument is callback function
var asyncTxt = readFile('hello.txt', 'utf-8', (err, text) => {
  console.log(text);
})

console.log('do this first, even though code after!');

// Promise solution - also, non-blocking
var { readFile } = require('fs').promises;

// In version 14.3+ of Node this 'top-level await' will work
// but in lower Node versions, 'await' must be inside 'async func'
// var file = await readFile('hello.txt', 'utf-8');
// console.log(file);
// wrap in parens them follow with parens to create IIFE
// (immediately invoked function expression... self executes!)
(async function hello() {
  var file = await readFile('hello.txt', 'utf-8');
  console.log('inside async function...');
  console.log(file);
})();
