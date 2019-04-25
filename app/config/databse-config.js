const q = require('q');
const mongoose = require('mongoose');

let connectionString = 'mongodb://127.0.0.1:27017/spotify-party'; // for local
if(process.env.MONGO_USER){ // check if running remotely
    const username = process.env.MONGO_USER; // get from environment
    const password = process.env.MONGO_PASS;
    connectionString = 'mongodb://' + username + ':' + password;
    connectionString += 'ds147436.mlab.com:47436/heroku_1bqg625p'; // user yours
}

const db = mongoose.connect(connectionString);
mongoose.Promise = q.Promise;

module.exports = db;
