const mongoose = require('mongoose');

module.exports = (DB) => {
    mongoose
        .connect(`mongodb://localhost/${DB}`, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        .then( () => console.log(`Successfully established a connection to the database, ${DB}`) )
        .catch( (err) => console.log(`Something went wrong when connecting to the database, ${DB}`, err) )
}