const express = require('express')
const dotenv = require('dotenv');
const { config } = require('./config/config')

const app = express()
app.use(express.json)
dotenv.config();

const PORT = config.port;
const hostname = config.host;


const router = require('./routers')
app.use(router)

require('./libs/mongodb');
const { URI }= require('./libs/mongodb')

app.listen(PORT, () => {
    console.log(`Server on: http://${hostname}:${PORT}`);
    console.log(`Mongo link: ${URI}`);
});


