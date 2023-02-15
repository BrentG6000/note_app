const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const noteSchema = new Schema({
  title: { type: String },
  message: { type: String },
  userId:
        {
            type: Schema.Types.ObjectId,
            ref: 'user'
        },
});

const Note = model('note', noteSchema);

module.exports = Note;