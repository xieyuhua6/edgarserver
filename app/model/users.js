'use strict';

module.exports = app => {
    const Mongoose = app.mongoose;
    const Schema = Mongoose.Schema;

    const UsersSchema = new Schema({
        tel: { type: String },
        pwd: { type: Number },
        create_time: { type: Date },
    });
    return Mongoose.model('Users', UsersSchema);
};
