const mongoose = require('mongoose');

const groupModel = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
});

const groupSchema = mongoose.model("Group", groupModel);
module.exports = groupSchema;
