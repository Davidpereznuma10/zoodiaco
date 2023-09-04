const Boom = require('@hapi/boom');
const { MongoLib } = require('../libs/mongodb');

class EmployeesService {
    constructor(){
        this.collection = 'Employees';
        this.mongoDB = new MongoLib();
    };
    async find(){
        try {
            const employee = await this.mongoDB.getAll(this.collection);
            if (employee.length === 0) {
                throw Boom.notFound('There are not employees');
            } else {
                return employee;
            };
        } catch (error) {
            console.error('Error in retrieving the employees: ',error);
            throw Boom.badImplementation('Internal server error.');
        };
    };

    async findOne(_id){
        try {
            const employee = await this.mongoDB.get(this.collection, _id);
            if (!employee) {
                throw Boom.notFound('Employee not found'); 
            } else {
                return employee;
            };
        } catch (error) {
            console.error('Error in retriving the employe: ', error);
            throw Boom.badImplementation('Internal server error');
        };
    };

    async create(data){
        try {
            const { Employee_ID, Name, Position, Hiring_Date, Salary } = data;
            if ( !Employee_ID || !Name || !Position || !Hiring_Date || !Salary ) {
                throw Boom.badRequest('Required data is missing to create the employee.')
            } else {
                const employe = await this.mongoDB.create(this.collection,{Employee_ID, Name, Position, Hiring_Date, Salary})
                return employe
            };
        } catch (error) {
            console.error('Error creating the employee: ', error);
            throw Boom.badImplementation('Internal server error');
        };
    };

    async update(_id, change = {}){
        try {
            const { Employee_ID, Name, Position, Hiring_Date, Salary } = change
            if ( !Employee_ID && !Name && !Position && !Hiring_Date && !Salary ) {
                throw Boom.badRequest('No data was provided to update the employee.');
            } else {
                const updateEmployee = await this.mongoDB.update(this.collection, _id, change)
                return updateEmployee
            };
        } catch (error) {
            console.error('Error updating the employee: ',error);
            throw Boom.badImplementation('Internal server error.')
        };
    };

    async delete(_id){
        try {
            await this.mongoDB.delete(this.collection, _id)
            return { message: `The order with the ID: ${_id} has been deleted`}
        } catch (error) {
            console.error('Error deleting the employee: ',error);
            throw Boom.badImplementation('Internal server error.')
        };
    };
};

module.exports = EmployeesService;