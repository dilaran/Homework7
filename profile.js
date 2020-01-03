const profile = require('./server');

const users = process.argv.slice(2);
users.forEach(profile.get);




