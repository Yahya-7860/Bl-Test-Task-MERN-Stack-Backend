const mongoose = require('mongoose');

const memberModel = new mongoose.Schema({
    memberName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    owe: {
        type: Number
    },
    lent: {
        type: Number
    },
    group_id: {
        type: String,
        required: true
    }
});

const memberSchema = mongoose.model('Member', memberModel);
module.exports = memberSchema;
