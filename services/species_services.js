const { MongoLib } = require('../libs/mongodb');
const Boom = require('@hapi/boom');

class SpeciesService {
    constructor(){
        this.collection = "Species";
        this.mongoDB = new MongoLib();
    };

    async find(){
        try {
            const species = await this.mongoDB.getAll(this.collection)
            if (species.length === 0) {
                throw Boom.notFound('There are no species');
            } else {
                return species;
            };
        } catch (error) {
            console.error('Error in retrieving the species: ', error);
            throw Boom.badImplementation('Internal server error.');
        };
    };

    async findOne(_id){
        try {
            const species = await this.mongoDB.get(this.collection, _id);
            if (!species) {
                throw Boom.notFound('There is no species with the given ID');
            } else {
                return species;
            }
        } catch (error) {
            console.error('Error in retrieving the species: ', error);
            throw Boom.badImplementation('Internal server error.');
        };
    };

    async create(data){
        try {
            const { Species_ID, Scientific_Name, Description } = data;
            if ( !Species_ID || !Scientific_Name || !Description) {
                throw Boom.badRequest('Required data is missing to create the species.');
            } else {
                const createSpecies = await this.mongoDB.create(this.collection, { Species_ID, Scientific_Name, Description });
                return createSpecies;
            };
        } catch (error) {
            console.error('Error in creating the species: ', error);
            throw Boom.badImplementation('Internal server error.');
        };
    };

    async update(_id, data = {}){
        try {
            const { Species_ID, Scientific_Name, Description } = data;
            if ( !Species_ID && !Scientific_Name && !Description) {
                throw Boom.badRequest('Required data is missing to update the species.');
            } else {
                const updateSpecies = await this.mongoDB.update(this.collection, _id, data);
                return updateSpecies;
            };
        } catch (error) {
            console.error('Error in updating the species: ', error);
            throw Boom.badImplementation('Internal server error.');
        };
    };

    async delete(_id){
        try {
            await this.mongoDB.delete(this.collection, _id);
            return { message: `The species with the ID: ${_id} has been deleted` };
        } catch (error) {
            console.error('Error in deleting the species: ', error);
            throw Boom.badImplementation('Internal server error.');
        }
    }
}

module.exports = SpeciesService;
