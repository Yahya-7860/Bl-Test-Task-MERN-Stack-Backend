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
    groupId: {
        type: String,
    }
});

const memberSchema = mongoose.model('Member', memberModel);
module.exports = memberSchema;
