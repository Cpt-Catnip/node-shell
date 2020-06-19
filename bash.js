const cat = require('./cat');

const map = {
  pwd: require("./pwd"),
  ls: require("./ls")
};

// Output a prompt
process.stdout.write("prompt > ");

// The stdin 'data' event fires after a user types in a line
process.stdin.on("data", (data) => {
  const cmd = data.toString().trim().split(' '); // remove newline

  if (cmd[0] === 'cat') {
    cat(cmd[1]);
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
