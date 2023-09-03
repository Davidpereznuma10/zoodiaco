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

app.listen(PORT, () => {
    console.log(`Server on: http://${hostname}:${PORT}`);
});

