const { Client } = require("pg");
const client = new Client({
    host: "localhost",
    user: "postgres",
    port: 5431,
    password: "test123",
    database: "test",
});

client.connect().then(() => console.log("Connected to database"));
module.exports = client;