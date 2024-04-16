import { ProductType } from "@/type";
import { Schema, model, models } from "mongoose";

interface IUser extends Document {
  clerkId: string;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  imgUrl: string;
  phone: string | number;
  products: ProductType[];
  shopAddress: string;
}

const UserSchema = new Schema<IUser>({
  clerkId: { type: String, required: true },
  username: { type: String, required: true },
  email: { type: String, required: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  imgUrl: { type: String },
  phone: { type: String, default: "+2348031111111" },
  products: [
    {
      type: Schema.Types.ObjectId,
      ref: "Product",
    },
  ],
  shopAddress: { type: String },
});

const User = models?.User || model("User", UserSchema);
export default User;
