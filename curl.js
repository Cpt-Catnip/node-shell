const rqst = require('request');

module.exports = function(URL) {
  rqst.get(URL, (err, resp, body) => {
    if (err) {
      throw err;
    } else {
      process.stdout.write(body);
      process.stdout.write("\nprompt > ");
    }
  })
}
