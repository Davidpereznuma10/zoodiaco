const { MongoLib } = require('../libs/mongodb');
const Boom = require('@hapi/boom');

class AnimalsService {
    constructor(){
        this.collection = 'Animals';
        this.mongoDB = new MongoLib();
    };

    async find(){
        try {
            const animal = await this.mongoDB.getAll(this.collection);
            if (animal.length === 0) {
                throw Boom.notFound('There are not animals')
            } else { 
                return animal 
                };
        } catch (error) {
            console.error('Error in retrieving the animals: ',error);
            throw Boom.badImplementation('Internal server error.')
        };   
    };

    async findOne(_id) {
        try {
            const animal = await this.mongoDB.get(this.collection, _id);
            if (!animal) {
                throw Boom.notFound('Animal not found');
            } else {
                return animal;
            }
        } catch (error) {
            console.error('Error in retrieving the animal: ', error);
            throw Boom.badImplementation('Internal server error.');
        }
    };
    
    async create(data){
        try {
           const { Name, Species, Date_Of_Birth, Gender, Enclosure } = data;
           if ( !Name || !Species || !Date_Of_Birth || !Gender || !Enclosure) {
                throw Boom.badRequest('Required data is missing to create the animal.');  
           } else {
                const createAnimal = await this.mongoDB.create(this.collection, {Name, Species, Date_Of_Birth, Gender, Enclosure })
                return createAnimal;
                };
        } catch (error) {
            console.error('Error creating the animal: ',error);
            throw Boom.badImplementation('Internal server error.')
        };
    };

    async update( _id, change  = {}){
        try {
            const { Name, Species, Date_Of_Birth, Gender, Enclosure } = change;
            if ( !Name && !Species && !Date_Of_Birth && !Gender && !Enclosure) {
                throw Boom.badRequest('No data was provided to update the animal.');
        } else {
            const updateAnimal = await this.mongoDB.update(this.collection, _id, change )
            return updateAnimal;
            };
        } catch (error) {
            console.error('Error updating the animal: ',error);
            throw Boom.badImplementation('Internal server error.')
        };
    };

    async delete(_id ){
        try {
            await this.mongoDB.delete(this.collection, _id);
            return  { message: `The order with the ID: ${_id} has been deleted`};
        } catch (error) {
            console.error('Error deleting the animal: ',error);
            throw Boom.badImplementation('Internal server error.')
        };
    };
};

module.exports = AnimalsService