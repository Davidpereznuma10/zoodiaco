const express = require('express');
const PurchaseService = require('../services/purchases_services');
const validatorHandler = require('../middlewares/validator.handler');
const { CreatePurchase, UpdatePurchase, GetPurchase } = require('../validators/purchases_dto');
const service = new PurchaseService();
const router = express.Router();

router.get('/', async (req, res, next) => {
    try {
        const purchases = await service.find();
        res.status(200).json(purchases);
    } catch (error) {
        next(error)
    };
});

router.get('/:_id',
validatorHandler(GetPurchase, "params"),
async (req, res, next) => {
    try {
        const { _id } = req.params;
        const purchase = await service.findOne(_id);
        res.status(200).json(purchase);
    } catch (error) {
        next(error)
    };
});

router.post('/', validatorHandler(CreatePurchase, "body"),
async (req, res, next) => {
    try {
        const body = req.body;
        const createPurchase = await service.create(body);
        res.status(201).json(createPurchase);
    } catch (error) {
        next(error);        
    };
});

router.patch('/:_id',
validatorHandler(GetPurchase,"params"),
validatorHandler(UpdatePurchase, "body"),
async (req, res, next) => {
    try {
        const { _id } = req.params;
        const body = req.body;
        const updatePurchase = await service.update(_id, body);
        res.status(200).json(updatePurchase);
    } catch (error) {
        next(error);
    };
});

router.delete('/:_id', 
validatorHandler(GetPurchase, "params"),
async (req, res, next) => {
    try {
        const { _id } = req.params;
        const deletePurchase = await service.delete(_id);
        res.status(204).json(deletePurchase);
    } catch (error) {
        next(error);
    };
});

module.exports = router;
