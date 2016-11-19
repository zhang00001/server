import *as Mongoose from 'mongoose';
var Schema = Mongoose.Schema;
var KaiFanSchema = new Schema({
    username: String,
    password: String,
    gender: String,
    nickname: String,
});
export var KaiFanModel = Mongoose.model('kaiFanUser', KaiFanSchema);