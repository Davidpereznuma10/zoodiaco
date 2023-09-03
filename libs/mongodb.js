const { MongoClient } = require('mongodb');
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

  connect() {
    return new Promise((resolve, reject) => {
      if (!MongoLib.connection) {
        this.client.connect((err) => {
          if (err) {
            console.error('Error connecting to MongoDB:', err);
            reject(err);
            return;
          }
          console.log('Connected successfully to MongoDB');
          resolve(this.client.db(this.database));
        });
      } else {
        resolve(MongoLib.connection);
      }
    });
  }
}

module.exports = { MongoLib, URI};
