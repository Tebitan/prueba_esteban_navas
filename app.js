require('dotenv').config();

const Server = require('./server/server');
const sever = new Server();
sever.listen();