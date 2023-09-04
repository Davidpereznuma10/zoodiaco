const express = require('express');
const validatorHandler = require('../middlewares/validator.handler');
const EmployeesService = require('../services/employees_services');
const { CreateEmployee, UpdateEmployee, GetEmployee } =require('../validators/employees_dto');
const router = express.Router();
const service =new EmployeesService();

router.get('/', async(req, res, next)=>{
    try {
        const employee = await service.find();
        res.status(200).json(employee);
    } catch (error) {
        next(error)
    };
});

router.get('/:_id',
validatorHandler(GetEmployee, "params"),
async(req, res, next)=>{
    try {
        const {_id} = req.params;
        const employee = await service.findOne(_id);
        res.status(200).json(employee);
    } catch (error) {
        next(error)
    };
});

router.post('/',
validatorHandler(CreateEmployee, "body"),
async(req, res, next)=>{
    try {
        const body = req.body;
        const createEmployee = await service.create(body);
        res.status(201).json(createEmployee);
    } catch (error) {
        next(error)
    };
});

router.patch('/:_id',
validatorHandler(GetEmployee, "params"),
validatorHandler(UpdateEmployee, "body"),
async(req, res, next)=>{
    try {
        const { _id } = req.params;
        const body = req.body;
        const updateEmploye = await service.update(_id, body);
        res.status(200).json(updateEmploye);
    } catch (error) {
        next(error)
    };
});

router.delete('/:_id',
validatorHandler(GetEmployee, "params"),
async(req, res, next)=>{
    try {
        const { _id } = req.params;
        const deleteEmployee = await service.delete(_id);
        res.status(204).json(deleteEmployee);
    } catch (error) {
        next(error)
    };
})
module.exports = router;