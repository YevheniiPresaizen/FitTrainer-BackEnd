const mongoose = require('mongoose'),
  Schema = mongoose.Schema

const ExerciseSchema = new Schema ({
  user: {type: Schema.Types.ObjectId, ref: 'User'},
  name: String,
  type: String
})

module.exports = mongoose.model('Exercise', ExerciseSchema)
