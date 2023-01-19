//Output a prompt
const Pwd = require('./pwd');
const yellow = new Pwd;

const Ls = require('./ls.js');
// const green = new Ls;
// process.stdout.write('prompt > ');

// The stdin 'data' event fires after a user types in a line
process.stdin.on('data', (data) => {
  const cmd = data.toString().trim(); //remove the newline
    
  const green = new Ls;

  if (cmd === 'pwd') {yellow} 
  else
  if (cmd === "ls") {green};
//   else {
// // process.stdout.write('You typed: ' + cmd);
// //   process.stdout.write('\nprompt > ');
// }
});