const mongoose = require('mongoose'),
  Schema = mongoose.Schema

const WorkoutSchema = new Schema ({
  index: Number,
  exercise: {type: Schema.Types.ObjectId, ref: 'Exercise'},
  repeat: Number,
  measurement: Number
})

const WorkoutsSchema = new Schema ({
  workouts: [WorkoutSchema],
  data: { type: String, required: true, unique: true },
  user: {type: Schema.Types.ObjectId, ref: 'User'}
})

module.exports = mongoose.model('Workouts', WorkoutsSchema)
