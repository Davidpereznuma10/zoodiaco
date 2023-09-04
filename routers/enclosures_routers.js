const express = require('express');
const EnclosureService = require('../services/enclosures_services');
const validatorHandler = require('../middlewares/validator.handler');
const { CreateEnclouseres, UpdateEnclouseres,GetEnclouseres} = require('../validators/enclosures_dto');
const service = new EnclosureService();
const router = express.Router();

router.get('/', async(req, res, next)=>{
    try {
        const enclosure = await service.find();
        res.status(200).json(enclosure);
    } catch (error) {
        next(error)
    };
});

router.get('/:_id',
validatorHandler(GetEnclouseres, "params"),
async( req, res, next )=>{
    try {
        const { _id }= req.params;
        const enclosure = await service.findOne(_id);
        res.status(200).json(enclosure);
    } catch (error) {
        next(error)
    };
});

router.post('/',
validatorHandler(CreateEnclouseres, "body"),
async(req, res, next)=>{
    try {
        const body = req.body;
        const createEnclouseres = await service.create(body);
        res.status(201).json(createEnclouseres);
    } catch (error) {
        next(error);        
    };
});

router.patch('/:_id',
validatorHandler(GetEnclouseres, "params"),
validatorHandler(UpdateEnclouseres, "body"),
async(req, res, next)=>{
    try {
        const { _id } = req.params;
        const body = req.body;
        const updateEnclouseres = await service.update(_id, body);
        res.status(200).json(updateEnclouseres);
    } catch (error) {
        next(error);
    };
});

router.delete('/:_id',
validatorHandler(GetEnclouseres, "params"),
async(req, res, next)=>{
    try {
        const { _id } = req.params;
        const deleteEnclosure = await service.delete(_id);
        res.status(204).json(deleteEnclosure);
    } catch (error) {
        next(error);
    };
});

module.exports = router;