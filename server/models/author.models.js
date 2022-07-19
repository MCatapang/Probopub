const mongoose = require('mongoose');
const AuthorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Author name is required!"],
        minlength: [3, "Author name must be at least 3 characters long!"]
    }
}, {timestamps: true})
const Author = mongoose.model('Author', AuthorSchema);

module.exports = Author;


// // ----------------------------------------------------------------Declarations
// const mongoose = require('mongoose');
// const PirateSchema = new mongoose.Schema({
//     name: {
//         type: String,
//         required: [true, "Pirate name is required!"],
//         minlength: [3, "Author name must be at least 3 characters long!"]
//     },
//     imageURL: {
//         type: String,
//         required: [true, "You must have an image for your pirate!"],
//     },
//     numberOfTreasureChests: {
//         type: Number,
//         required: [true, "In order to be a pirate, you need to have a treasure chest!"],
//         min: [1, "At least one treasure chest come on now"] 
//     },
//     catchPhrase: {
//         type: String,
//         required: [true, "Pirates are iconic - have a catch phrase!"],
//         minlength: [4, "At least four characters (like 'Arr!')"]
//     },
//     crewPosition: {
//         type: String,
//         required: [true, "Pirates need to know their place in this ship!"],
//     },
//     pegLeg: {
//         type: Boolean,
//         required: [true]
//     },
//     eyePatch: {
//         type: Boolean,
//         required: [true]
//     },
//     hookHand: {
//         type: Boolean,
//         required: [true]
//     }
// }, {timestamps: true})
// const Pirate = mongoose.model('Pirate', PirateSchema);

// // ----------------------------------------------------------------Export
// module.exports = Pirate;