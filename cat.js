const fs = require('fs');

// cat file
module.exports = function(filename) {
  // load in file
  fs.readFile(filename, 'utf8', (err, data) => {
    if (err) {
      throw err;
    } else {
      process.stdout.write(data);
      process.stdout.write("\nprompt > ");
    }
  });

  // read each line of file

  // push line to str
}
