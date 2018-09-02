const request = require('request');
var faker = require('faker');

const options =  { 
    method: 'POST',
    uri: `http://localhost:1234/users/?_ts=${Date.now()}`,
    body: {
        email: faker.internet.email(),
        firstName: faker.name.findName().split(' ')[0],
        lastName: faker.name.findName().split(' ')[1],
        password: faker.internet.password()
    },
    json: true
    // JSON stringifies the body automatically
}
console.log(options.body)
request(options);
