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

export interface IPost {
  _id: string
  user: string
  title: string
  tags: string[]
  body: string
  image: string
  views: number
  comments: number
  createdAt: Date
  updatedAt: Date
  __v: number
}

export interface IComment {
  _id: string
  user: string
  post: string
  body: string
  createdAt: Date
  updatedAt: Date
  __v: number
}

type BlogPost = {
  id: string
  title: string
  date: string
  image: string
  tag: string
  read: number
}
