const Joi = require('joi');
const joi = require('joi');

const _id = joi.string();
const Species_ID = joi.string();
const Scientific_Name= joi.string();
const Description = joi.string();

const CreateSpecie = joi.object({
    Species_ID: Species_ID.required(),
    Scientific_Name: Scientific_Name.required(),
    Description: Description.required(),
});

const UpdateSpecie = joi.object({
    Species_ID: Species_ID,
    Scientific_Name: Scientific_Name,
    Description: Description,
});

const GetSpecie = joi.object({
    _id:_id.required()
});

module.exports = { CreateSpecie, UpdateSpecie, GetSpecie }