import { Schema, model, models } from 'mongoose'

const UserSchema = new Schema(
  {
    name: { type: String, required: true },
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    avatar: { type: String, required: false },
    bio: { type: String, required: false },
    posts: { type: Number, required: false, default: 0 },
    views: { type: Number, required: false, default: 0 },
    paymentStatus: { type: Boolean, required: true, default: false },
    lastPaymentDate: { type: String, required: false },
    paymentId: { type: String, required: false },
  },
  {
    timestamps: true,
  }
)

const User = models.User || model('User', UserSchema)

export default User
