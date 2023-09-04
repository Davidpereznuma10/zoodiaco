const { MongoLib } = require('../libs/mongodb');
const Boom = require('@hapi/boom');

class EnclosureService {
    constructor(){
        this.collection = "Enclosures";
        this.mongoDB = new MongoLib();
    }

    async find(){
        try {
            const enclosure = await this.mongoDB.getAll(this.collection);
            if (enclosure.length === 0) {
                throw Boom.notFound('There are not enclosure');
            } else {
                return enclosure
            };
        } catch (error) {
            console.error('Error in retrieving the enclosures: ',error);
            throw Boom.badImplementation('Internal server error.');
        };
    };

    async findOne(_id){
        try {
            const enclosure = await this.mongoDB.get(this.collection, _id);
            if (!enclosure) {
                throw Boom.notFound('There is not enclosure');
            } else {
                return enclosure
            };
        } catch (error) {
            console.error('Error in retrieving the enclosure: ',error);
            throw Boom.badImplementation('Internal server error.');
        };
    };

    async create(data){
        try {
            const { Name, Enclosure_ID,Habitat_Type, Maximum_Capacity } = data;
            if ( !Name || !Enclosure_ID || !Habitat_Type || !Maximum_Capacity ) {
                throw Boom.badRequest('Required data is missing to create the enclosure.')
            } else {
                const enclosure = await this.mongoDB.create(this.collection, { Name, Enclosure_ID, Habitat_Type, Maximum_Capacity });
                return enclosure;
            };
        } catch (error) {
            console.error('Error in creating the enclosure: ',error);
            throw Boom.badImplementation('Internal server error.');
        };
    };

    async update(_id, change= {}){
        try {
            const { Name, Enclosure_ID,Habitat_Type, Maximum_Capacity } = change;
            if ( !Name && !Enclosure_ID && !Habitat_Type && !Maximum_Capacity ) {
                throw Boom.badRequest('No data was provided to update the enclosure.')
            } else {
                const updateEenclosure = await this.mongoDB.update(this.collection, _id, change);
                return updateEenclosure;
            };
        } catch (error) {
            console.error('Error in updating the enclosure: ',error);
            throw Boom.badImplementation('Internal server error.'); 
        };
    };

    async delete(_id){
        try {
            await this.mongoDB.delete(this.collection, _id);
            return { message: `The order with the ID: ${_id} has been deleted`}
        } catch (error) {
            console.error('Error in deleting the enclosure: ',error);
            throw Boom.badImplementation('Internal server error.'); 
        };
    };
}

module.exports = EnclosureService;