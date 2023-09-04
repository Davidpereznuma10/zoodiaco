const { MongoLib } = require('../libs/mongodb');
const Boom = require('@hapi/boom');

class PurchaseService{
    constructor(){
        this.collection = "Purchases";
        this.mongoDB = new MongoLib();
    };

    async find(){
        try {
            const purchase = await this.mongoDB.getAll(this.collection)
            if (purchase.length === 0) {
                throw Boom.notFound('There are not purchase');
            } else {
                return purchase;
            };
        } catch (error) {
            console.error('Error in retrieving the purchases: ',error);
            throw Boom.badImplementation('Internal server error.');
        };
    };

    async findOne(_id){
        try {
            const purchase = await this.mongoDB.get(this.collection,_id);
            if (!purchase) {
                throw Boom.notFound('There is not a purchase');
            } else {
                return purchase;
            }
        } catch (error) {
            console.error('Error in retrieving the purchase: ',error);
            throw Boom.badImplementation('Internal server error.');
        };
    };

    async create(data){
        try {
            const { Purchase_ID, Visitor_ID, Purchase_Date_and_Time, Total_Amount, Purchased_Items } = data
            if ( !Purchase_ID || !Visitor_ID || !Purchase_Date_and_Time || !Total_Amount || !Purchased_Items) {
                throw Boom.badRequest('Required data is missing to create the purchase.')
            }else {
                const createPurchase = await this.mongoDB.create(this.collection,{ Purchase_ID, Visitor_ID, Purchase_Date_and_Time, Total_Amount, Purchased_Items })
                return createPurchase
            };
        } catch (error) {
            console.error('Error in creating the purchase: ',error);
            throw Boom.badImplementation('Internal server error.');
        };
    };

    async update(_id, data = {}){
        try {
            const { Purchase_ID, Visitor_ID, Purchase_Date_and_Time, Total_Amount, Purchased_Items } = data
            if ( !Purchase_ID && !Visitor_ID && !Purchase_Date_and_Time && !Total_Amount && !Purchased_Items) {
                throw Boom.badRequest('Required data is missing to update the purchase.')
            }else {
                const UpdatePurchase = await this.mongoDB.update(this.collection, _id, data)
                return UpdatePurchase;
            };
        } catch (error) {
            console.error('Error in updating the purchase: ',error);
            throw Boom.badImplementation('Internal server error.');
        };
    };

    async delete(_id){
        try {
            await this.mongoDB.delete(this.collection, _id)
            return { message: `The order with the ID: ${_id} has been deleted`}
        } catch (error) {
            console.error('Error in deleting the purchase: ',error);
            throw Boom.badImplementation('Internal server error.');
        }
    }
}

module.exports = PurchaseService;