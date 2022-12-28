const mongoose = require( 'mongoose' );

mongoose.set( 'returnOriginal', false );
mongoose.set( 'runValidators', true );
mongoose.set('strictQuery', false);

require('../models/Users'); 
require('../models/problems'); //problems

const dbString = `mongodb+srv://leedcodedb:Hurairah123@cluster0.6ieinzc.mongodb.net/?retryWrites=true&w=majority`         


const connect = async () => {
    try {
        await mongoose.connect(dbString ); //mongodb://localhost:27017
        console.log( 'conncted to the db' );
    } catch( error ) {
        console.log( error.message );
        throw error;
    }
};

module.exports = {
    connect
};