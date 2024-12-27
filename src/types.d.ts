export interface IUser {
  _id: string
  name: string
  username: string
  email: string
  bio: string
  avatar: string
  views: number
  posts: number
  paymentStatus: boolean
  lastPaymentDate: string
  paymentId: string
  createdAt: Date
  updatedAt: Date
  __v: number
}
