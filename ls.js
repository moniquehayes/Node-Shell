const fs = require("fs");
process.stdout.write("prompt > ");

// module.exports = function() {
// process.stdin.on('data', (data) => {
//   const cmd = data.toString().trim();
//     if (cmd === 'ls') {
//         console.log(process.cwd());
//     } else
//   {process.stdout.write('You typed: ' + cmd)};
//   process.stdout.write('\nprompt > ');
// })};

module.exports = function () {
  process.stdin.on("data", (data) => {
    const cmd = data.toString().trim();
    if (cmd === "ls") {
      fs.readdir("./", "utf8", (err, files) => {
        if (err) {
          throw err;
        } else {
          process.stdout.write(files.join("\n"));
          process.stdout.write("\nprompt > ");
        }
      });
    }
  });
};
