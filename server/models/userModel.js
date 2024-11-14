import mongoose from "mongoose";

const UserSchema = mongoose.Schema({
    userName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    }
  },
  {timestamp: true},
  );
  
  const UserModel = mongoose.model("User", UserSchema);
  
  module.exports = {
    UserModel
  };  