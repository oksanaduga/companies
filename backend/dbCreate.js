require('dotenv').config();

const pgtools = require('pgtools');

pgtools.createdb({
    user: 'postgres',
    password: '',
    port: 5432,
    host: 'localhost'
}, 'company', function (err, res) {
    if (err) {
        console.error(err);
        process.exit(-1);
    }
    console.log(res);
});