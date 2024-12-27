import { Schema, model, models } from 'mongoose'

const CommentSchema = new Schema(
  {
    user: { type: Schema.Types.ObjectId, required: true, ref: 'User' },
    post: { type: Schema.Types.ObjectId, required: true, ref: 'Post' },
    body: { type: String, required: true },
  },
  {
    timestamps: true,
  }
)

const Comment = models.Comment || model('Comment', CommentSchema)

export default Comment
