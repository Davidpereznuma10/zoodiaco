const express = require('express');
const SpecieService = require('../services/species_services');
const validatorHandler = require('../middlewares/validator.handler');
const { CreateSpecie, UpdateSpecie, GetSpecie } = require('../validators/species_dto');
const service = new SpecieService();
const router = express.Router();

router.get('/', async (req, res, next) => {
    try {
        const species = await service.find();
        res.status(200).json(species);
    } catch (error) {
        next(error)
    };
});

router.get('/:_id',
validatorHandler(GetSpecie, "params"),
async (req, res, next) => {
    try {
        const { _id } = req.params;
        const specie = await service.findOne(_id);
        res.status(200).json(specie);
    } catch (error) {
        next(error)
    };
});

router.post('/',
validatorHandler(CreateSpecie, "body"),
async (req, res, next) => {
    try {
        const body = req.body;
        const createSpecie = await service.create(body);
        res.status(201).json(createSpecie);
    } catch (error) {
        next(error);        
    };
});

router.patch('/:_id', validatorHandler(GetSpecie, "params"),
validatorHandler(UpdateSpecie, "body"),
async (req, res, next) => {
    try {
        const { _id } = req.params;
        const body = req.body;
        const updateSpecie = await service.update(_id, body);
        res.status(200).json(updateSpecie);
    } catch (error) {
        next(error);
    };
});

router.delete('/:_id',
validatorHandler(GetSpecie, "params"),
async (req, res, next) => {
    try {
        const { _id } = req.params;
        const deleteSpecie = await service.delete(_id);
        res.status(204).json(deleteSpecie);
    } catch (error) {
        next(error);
    };
});

module.exports = router;
