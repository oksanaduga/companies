require('dotenv').config();
const client = require('./db');
console.log('start migrate');
const table = `
  CREATE TABLE IF NOT EXISTS partner_locator (
    id serial,
    company varchar(255) NOT NULL,
    status varchar(255) NOT NULL,
    logo varchar(255) NOT NULL,
    address varchar(255) NOT NULL,
    website varchar(255) NOT NULL,
    phone varchar(40) NOT NULL,
    countries_covered varchar(1000) NOT NULL,
    states_covered varchar(1000) NOT NULL,
    PRIMARY KEY (id)
  );
  CREATE TABLE IF NOT EXISTS loc_country (
      country_id serial PRIMARY KEY,
      name varchar(255) NOT NULL,
      short_name varchar(50) DEFAULT NULL
  );
  CREATE TABLE IF NOT EXISTS loc_state (
    state_id serial PRIMARY KEY,
    name varchar(255) NOT NULL,
    short_name varchar(50) DEFAULT NULL,
    country_id INTEGER NOT NULL,
    FOREIGN KEY (country_id) REFERENCES loc_country (country_id)
  );
`;

console.log('table: ', table);

const newTable = async () => {
    console.log('newTable start');

    client.query(table, (err, res) => {
        if (err) throw err;
        console.log('res', res);
        console.log('end');
        client.end();
    });

};

newTable();