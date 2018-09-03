const request = require('request-promise');
const faker = require('faker');

const easyPbkdf2 = require("easy-pbkdf2")();
const salt = easyPbkdf2.generateSalt();

const theTruePassword = faker.internet.password();

easyPbkdf2.secureHash( theTruePassword, salt, function( err, passwordHashed, originalSalt ) {
    const options =  { 
        method: 'POST',
        uri: `http://localhost:1234/users/?_ts=${Date.now()}`,
        body: {
            email: faker.internet.email(),
            firstName: faker.name.findName().split(' ')[0],
            lastName: faker.name.findName().split(' ')[1],
            password: passwordHashed,
            // some extras below here:
            salt: originalSalt,
            theTruePassword: theTruePassword

        },
        json: true
    }
    console.log(options.body);

    request(options).then((response) => {
        console.log('request sent');
    })
    .catch ((err) => {
        console.log(err.message);
    })
});
