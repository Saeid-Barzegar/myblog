import mongoose from 'mongoose';

const dbAddress = process.env.DB_ADDRESS;
const dbUser = process.env.DB_USER_NAME;
const dbPassword = process.env.DB_PASSWORD;

const connectDb = async () => {
  try {
    await mongoose.connect(`mongodb://${dbUser}:${dbPassword}@${dbAddress}`)
    console.log('connected to db successfully')
  } catch (err) {
    console.log('error connecting to database', JSON.stringify({err}))
    process.exit(1)
  }
}

export default connectDb;