const mongoose = require('mongoose')
const { Schema }= mongoose

// Schema:

const languageSchema = new Schema({
    name: { type:String, required: true},
    greeting: String,
    pangram:String,
    filler: String

})



//  modles and export
const language = mongoose.model('language', languageSchema)
module.exports = language