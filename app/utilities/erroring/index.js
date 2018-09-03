const opn = require('opn');

module.exports = function problemGoogling(err) {
    opn(`https://www.google.pl/search?q=` + err.toString().replace(" ", "+"));
}
