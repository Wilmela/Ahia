import { Schema, model, models, Document } from "mongoose";

const UserSchema = new Schema({
  clerkId: { type: String, required: true },
  username: { type: String, required: true },
  email: { type: String, required: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  imgUrl: { type: String },
});

const User = models.User || model("User", UserSchema);
export default User;
