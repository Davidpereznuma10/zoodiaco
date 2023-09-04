const { MongoLib } = require('../libs/mongodb');
const Boom = require('@hapi/boom');

class VisitorsService {
    constructor(){
        this.collection = "Visitors";
        this.mongoDB = new MongoLib();
    };

    async find(){
        try {
            const visitors = await this.mongoDB.getAll(this.collection)
            if (visitors.length === 0) {
                throw Boom.notFound('There are no visitors');
            } else {
                return visitors;
            };
        } catch (error) {
            console.error('Error in retrieving the visitors: ', error);
            throw Boom.badImplementation('Internal server error.');
        };
    };

    async findOne(_id){
        try {
            const visitor = await this.mongoDB.get(this.collection, _id);
            if (!visitor) {
                throw Boom.notFound('There is no visitor with the given ID');
            } else {
                return visitor;
            }
        } catch (error) {
            console.error('Error in retrieving the visitor: ', error);
            throw Boom.badImplementation('Internal server error.');
        };
    };

    async create(data){
        try {
            const { Visitor_ID, Name, Visit_Date, Group_Size, Contact } = data;
            if (!Visitor_ID || !Name || !Visit_Date || !Group_Size || !Contact) {
                throw Boom.badRequest('Required data is missing to create the visitor.');
            } else {
                const createVisitor = await this.mongoDB.create(this.collection, { Visitor_ID, Name, Visit_Date, Group_Size, Contact });
                return createVisitor;
            };
        } catch (error) {
            console.error('Error in creating the visitor: ', error);
            throw Boom.badImplementation('Internal server error.');
        };
    };

    async update(_id, data = {}){
        try {
            const { Visitor_ID, Name, Visit_Date, Group_Size, Contact } = data;
            if (!Visitor_ID && !Name && !Visit_Date && !Group_Size && !Contact) {
                throw Boom.badRequest('Required data is missing to update the visitor.');
            } else {
                const updateVisitor = await this.mongoDB.update(this.collection, _id, data);
                return updateVisitor;
            };
        } catch (error) {
            console.error('Error in updating the visitor: ', error);
            throw Boom.badImplementation('Internal server error.');
        };
    };

    async delete(_id){
        try {
            await this.mongoDB.delete(this.collection, _id);
            return { message: `The visitor with the ID: ${_id} has been deleted` };
        } catch (error) {
            console.error('Error in deleting the visitor: ', error);
            throw Boom.badImplementation('Internal server error.');
        }
    }
}

module.exports = VisitorsService;
