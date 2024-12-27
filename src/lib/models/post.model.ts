import { Schema, model, models } from 'mongoose'

const PostSchema = new Schema(
  {
    user: { type: Schema.Types.ObjectId, required: true, ref: 'User' },
    title: { type: String, required: true },
    tags: [{ type: String }],
    body: { type: String, required: true },
    image: { type: String, default: '' },
    views: { type: Number, default: 0 },
    comments: { type: Number, default: 0 },
  },
  {
    timestamps: true,
  }
)

const Post = models.Post || model('Post', PostSchema)

export default Post
