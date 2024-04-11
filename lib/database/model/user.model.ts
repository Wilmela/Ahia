import { ProductType } from "@/type";
import { Schema, model, models } from "mongoose";

interface IUser extends Document {
  clerkId: string;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  imgUrl: string;
  products: ProductType[];
}

const UserSchema = new Schema<IUser>({
  clerkId: { type: String, required: true },
  username: { type: String, required: true },
  email: { type: String, required: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  imgUrl: { type: String },
  products: [
    {
      type: Schema.Types.ObjectId,
      ref: "Product",
    },
  ],
});

const User = models?.User || model("User", UserSchema);
export default User;
