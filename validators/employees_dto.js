const joi = require('joi');

const  _id = joi.string();
const Name = joi.string();
const Employee_ID = joi.string();
const Position = joi.string();
const Hiring_Date = joi.date().iso();
const Salary =  joi.number();

const CreateEmployee = joi.object({
    Employee_ID: Employee_ID.required(),
    Name: Name.required(),
    Position: Position.required(),
    Hiring_Date: Hiring_Date.required(),
    Salary: Salary.required()
});

const UpdateEmployee = joi.object({
    Employee_ID:Employee_ID,
    Name: Name,
    Position: Position,
    Hiring_Date: Hiring_Date,
    Salary: Salary
})

const GetEmployee = joi.object({
    _id:_id.required()
})

module.exports = { CreateEmployee, UpdateEmployee, GetEmployee }
