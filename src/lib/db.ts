import mongoose from 'mongoose'

const MONGO_URI = process.env.MONGO_URI

const connect = async () => {
  const connectionState = mongoose.connection.readyState

  if (connectionState === 1) {
    console.log('DB already connected...')
    return
  }

  if (connectionState === 2) {
    console.log('Connecting to DB...')
    return
  }

  try {
    mongoose.connect(MONGO_URI!, {
      dbName: 'gpamasterv2',
      bufferCommands: true,
    })
    console.log('DB connection successful...')
  } catch (err: any) {
    console.log('Error while connecting to DB: ', err)
    throw new Error(err)
  }
}

export default connect
