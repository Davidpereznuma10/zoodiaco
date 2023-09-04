const express = require('express');
const VisitorsService = require('../services/visitors_services');
const validatorHandler = require('../middlewares/validator.handler');
const { CreateVisitor, UpdateVisitor, GetVisitor } = require('../validators/visitors_dto');
const service = new VisitorsService();
const router = express.Router();

router.get('/', async (req, res, next) => {
    try {
        const visitors = await service.find();
        res.status(200).json(visitors);
    } catch (error) {
        next(error)
    };
});

router.get('/:_id',
validatorHandler(GetVisitor, "params"),
async (req, res, next) => {
    try {
        const { _id } = req.params;
        const visitor = await service.findOne(_id);
        res.status(200).json(visitor);
    } catch (error) {
        next(error)
    };
});

router.post('/',
validatorHandler(CreateVisitor, "body"),
async (req, res, next) => {
    try {
        const body = req.body;
        const createVisitor = await service.create(body);
        res.status(201).json(createVisitor);
    } catch (error) {
        next(error);        
    };
});

router.patch('/:_id', validatorHandler(GetVisitor, "params"),
validatorHandler(UpdateVisitor, "body"),
async (req, res, next) => {
    try {
        const { _id } = req.params;
        const body = req.body;
        const updateVisitor = await service.update(_id, body);
        res.status(200).json(updateVisitor);
    } catch (error) {
        next(error);
    };
});

router.delete('/:_id', validatorHandler(GetVisitor, "params"),
async (req, res, next) => {
    try {
        const { _id } = req.params;
        const deleteVisitor = await service.delete(_id);
        res.status(204).json(deleteVisitor);
    } catch (error) {
        next(error);
    };
});

module.exports = router;
