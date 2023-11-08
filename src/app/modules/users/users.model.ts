import { Model, Schema, model } from 'mongoose'
import { IUser } from './users.interface'

type userModel = Model<IUser, object>

// user schema
const userSchema = new Schema<IUser>(
  {
    id: {
      type: String,
      required: true,
      unique: true,
    },
    role: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  },
)

// user model
export const User = model<IUser, userModel>('User', userSchema)