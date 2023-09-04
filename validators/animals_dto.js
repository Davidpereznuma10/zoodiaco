const joi = require('joi');

const _id = joi.string();
const Name = joi.string();
const Species = joi.string();
const Date_Of_Birth = joi.date().iso();
const Gender = joi.string();
const Enclosure = joi.string();

const createAnimal = joi.object({
    Name: Name.required(),
    Species:Species.required(),
    Date_Of_Birth: Date_Of_Birth.required(),
    Gender: Gender.required(),
    Enclosure: Enclosure.required()
});

const updateAnimal = joi.object({
    Name: Name,
    Species:Species,
    Date_Of_Birth: Date_Of_Birth,
    Gender: Gender,
    Enclosure: Enclosure
});

const getAnimal = joi.object({
    _id: _id.required()
});

module.exports = { createAnimal, updateAnimal, getAnimal }