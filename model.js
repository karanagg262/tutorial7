const mongoose = require("mongoose");



const users = mongoose.Schema(
    {
        email: {
            type: String,
            required: true
        },
        firstname: {
            type: String,
            required: true
        },
        id: {
            type: String,
            required: true,
        }
    }
)


const Users = mongoose.model('tutorial6', users);

module.exports = Users;
