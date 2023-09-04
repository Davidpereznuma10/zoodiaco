const joi = require('joi');

const _id = joi.string();
const Name= joi.string();
const Enclosure_ID = joi.string();
const Habitat_Type = joi.string();
const Maximum_Capacity = joi.number();

const CreateEnclouseres = joi.object({
    Enclosure_ID: Enclosure_ID.required(),
    Name:Name.required(),
    Habitat_Type: Habitat_Type.required(),
    Maximum_Capacity: Maximum_Capacity.required()
});

const UpdateEnclouseres = joi.object({
    Name:Name,
    Enclosure_ID: Enclosure_ID,
    Habitat_Type: Habitat_Type,
    Maximum_Capacity: Maximum_Capacity
});

const GetEnclouseres = joi.object({
    _id:_id.required()
});

module.exports = { CreateEnclouseres, UpdateEnclouseres, GetEnclouseres }