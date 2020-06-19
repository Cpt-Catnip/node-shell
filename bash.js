const cat = require('./cat');
const curl = require('./curl');
const pwd = require("./pwd");
const ls = require("./ls");

// Output a prompt
process.stdout.write("prompt > ");

// The stdin 'data' event fires after a user types in a line
process.stdin.on("data", (data) => {
  const cmd = data.toString().trim().split(' '); // remove newline

  if (cmd[0] === 'cat') {
    cat(cmd[1]);
  } if (cmd[0] === 'curl') {
    curl(cmd[1]);
  } else if(cmd[0] === 'pwd') {
    pwd();
  } else if(cmd[0] === 'ls') {
    ls();
  } else {
    process.stdout.write("\nUnknown Command: " + cmd);
    process.stdout.write("\nprompt > ");
  }




  // try {
  //   map[cmd]();
  // } catch {
  //   process.stdout.write("\nUnknown Command: " + cmd);
  //   process.stdout.write("\nprompt > ");
  // }
});
