const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: {type: String,require: true},
    email: {type: String, unique: true, require: true},
    password: {type: String,require:true},
    role: { type: String, enum: ['user', 'admin'], default: 'user' },
});
module.exports = mongoose.model("User",userSchema);

