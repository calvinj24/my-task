const { Schema, model, Types } = require('mongoose');

const TaskSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true
    },
    description: {
      type: String
    },
    importance: {
      type: Number,
      enum: [1, 2, 3, 4, 5],
      default: 3
    },
    urgency: {
      type: Number,
      enum: [1, 2, 3, 4, 5],
      default: 3
    }
  }
)

const Task = model('Task', TaskSchema);

module.exports = Task;