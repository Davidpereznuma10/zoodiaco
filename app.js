const express = require('express');
const dotenv = require('dotenv');
const { config } = require('./config/config');
const routerApi = require('./routers/');
const { logErrors, errorHanlder, boomError }=require('./middlewares/error.handler')

dotenv.config();
const app = express()

const PORT = config.port;
const hostname = config.host;

app.use(express.json())
routerApi(app)

const { URI }= require('./libs/mongodb')

app.use(logErrors);
app.use(boomError);
app.use(errorHanlder);

app.listen(PORT, () => {
    console.log(`Server on: http://${hostname}:${PORT}/api/v1`);
    console.log(`Mongo link: ${URI}`);
});


