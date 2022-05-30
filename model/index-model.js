const {Schema, model} = require('mongoose');

const schema = new Schema({
    id: {
        type: Number,
        required: true,
        unique: true
    },
    firstName: {
        type: String,
        required: true
    },
    secondName: {
        type: String,
        required: true
    },
    group: {
        type: Number,
        required: true
    },
    dismissal: {
        type: Number,
        required: true
    }
});

module.exports = model('Dismissal', schema);