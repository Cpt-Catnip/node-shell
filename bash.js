// Output a prompt
process.stdout.write('prompt > ');

// The stdin 'data' event fires after a user types in a line
process.stdin.on('data', (data) => {
  const cmd = data.toString().trim(); // remove newline

  // check for pwd
  if (cmd === 'pwd') {
    // process.stdout.write(__dirname);
    process.stdout.write(process.cwd());
  } else {
    process.stdout.write('You typed: ' + cmd);
  }

  process.stdout.write('\nprompt > ');
});
