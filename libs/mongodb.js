const { MongoClient, ObjectId } = require('mongodb');
const { config } = require('../config/config');

const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);
const DATABASE = encodeURIComponent(config.dbName);
const HOST = encodeURIComponent(config.dbHost);

const URI = `mongodb+srv://${USER}:${PASSWORD}@${HOST}/${DATABASE}?retryWrites=true&w=majority`;

class MongoLib {
    constructor() {
        this.client = new MongoClient(URI);
        this.database = DATABASE;

      }
      async connect() {
        try {
          const client = await MongoClient.connect(URI);
          return client.db();
        } catch (error) {
          console.error('Error connecting to MongoDB:', error);
        }
      }
    async  getAll(collection, query) {
        return await this.connect().then(db => {
        return db
            .collection(collection)
            .find(query)
            .toArray();
        });
    }

    async get(collection, _id) {
        return await this.connect().then(db => {
        return db.collection(collection).findOne({ _id: new ObjectId(_id) });
        });
    }

    async create(collection, data) {
        return await this.connect()
        .then(db => {
            return db.collection(collection).insertOne(data);
        })
        .then(result => `The order with the ID: ${result.insertedId} has been created`);
    }

    async update(collection, _id, data) {
        return await this.connect()
        .then(db => {
            return db
            .collection(collection)
            .updateOne({ _id: new ObjectId(_id) }, { $set: data }, { upsert: true });
        })
        .then(result => `The order with the ID: ${result.upsertedId || _id} has been updated`);
    }

    async delete(collection, _id) {
        return await this.connect()
        .then(db => {
            return db.collection(collection).deleteOne({ _id: new ObjectId(_id) });
        })
        .then(() => `The order with the ID: ${_id} has been deleted`);
    }

    getUser(collection, id, pw) {
        return this.connect().then(db => {
        return db.collection(collection).findOne({ Employee_ID: id, Name: pw });
        });
    }
}

module.exports = { MongoLib, URI};
