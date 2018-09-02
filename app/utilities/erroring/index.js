const opn = require('opn');

export function problemGoogling(err) {
    opn(`https://www.google.pl/search?q=` + err.toString().replace(" ", "+"));
}
