const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new Schema({
  name: { type: String },
  email: { type: String },
  password: { type: String },
  notes: [
    {
      type: Schema.Types.ObjectId,
      ref: 'note',
    }
  ]
});

UserSchema.pre("save", async function(next) {
  this.password = await bcrypt.hash(this._doc.password, 10)
  next();
});

const User = model('user', userSchema);

module.exports = User;