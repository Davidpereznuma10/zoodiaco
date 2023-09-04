const  express = require('express');
const AnimalsService = require('../services/animals_service');
const validatorHandler = require('../middlewares/validator.handler');
const { createAnimal, updateAnimal, getAnimal } = require('../validators/animals_dto');
const router = express.Router();
const service = new AnimalsService();

router.get('/', async(req, res, next)=>{
    try {
        const animals = await service.find();
        res.status(200).json(animals);
    } catch (error) {
        next(error)
    }
});

router.get('/:_id',
  validatorHandler(getAnimal, "params"),
  async (req, res, next) => {
    const { _id } = req.params;
    try {
      const animal = await service.findOne(_id);
      res.status(200).json(animal);
    } catch (error) {
      next(error);
    }
  }
);


router.post('/',
validatorHandler(createAnimal, "body"),
async(req, res, next)=>{
    const body = req.body;
    try {
        const newAnimal = await service.create(body);
        res.status(201).json(newAnimal);
    } catch (error) {
        next(error)
    };
});

router.patch('/:_id',
validatorHandler(getAnimal, "params"),
validatorHandler(updateAnimal, "body"),
async(req, res, next)=>{
    const { _id } = req.params;
    const body = req.body;
    try {
        const updateAnimal = await service.update(_id, body);
        res.status(200).json(updateAnimal);
    } catch (error) {
        next(error)
    };
});

router.delete('/:_id',
validatorHandler(getAnimal, "params"),
async(req, res, next)=>{
    const { _id } = req.params;
    try {
        const deleteAnimal = await service.delete(_id);
        res.status(204).json(deleteAnimal)
    } catch (error) {
        next(error)
    }
})
module.exports = router;
