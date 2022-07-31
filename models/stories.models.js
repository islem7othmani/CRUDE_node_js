const mongoose = require("mongoose");
const Schema = mongoose.Schema ;

const storySchema = new Schema ({
    title : { type : String} ,
    description : { type : String},
    chapters : { type : Number}
});

module.exports= mongoose.model("story",storySchema);