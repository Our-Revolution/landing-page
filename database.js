var pg = require('pg');
var connectionString = process.env.DATABASE_URL;

var client = new pg.Client(connectionString);
client.connect();
var query = client.query('CREATE TABLE subscribers(id SERIAL PRIMARY KEY, email  VARCHAR(255) not null, zip VARCHAR(10))');
query.on('end', function() { client.end(); });
