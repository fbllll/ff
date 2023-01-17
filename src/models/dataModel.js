const mongoose = require('mongoose');
const {Schema} = mongoose;

const dataSchema = new Schema({
    nameProfile: {type: String},
    emailProfile: {type: String},
    ownerProfile: {type: String},
    photoProfile: {type: String},
    yearsProfile: {type: String},
    yearsProfileLost: {type: String},
    friendsProfile: {type: String},
    username: {type: String},
    pass: {type: String}
}, {
    versionKey: false
})

module.exports = mongoose.model('Data', dataSchema);