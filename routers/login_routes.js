const {Router} = require("express");
const { EmployeesCollection } = require("../config/jwt.js")
const service = new EmployeesCollection();
const appLogin = Router();

appLogin.use(async(req,res)=>{
    try {
        const generate = await service.generateToken(req,res)
        res.status(generate.status).send(generate);
    } catch (error) {
        console.log(error);
        res.status(error.status).send({message: error.message})
    }
});


module.exports = {appLogin};