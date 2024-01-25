import mongoose from "mongoose";

let cached = (global as any).mongoose || { conn: null, promise: null };
const MONGO_URI = process.env.MONGO_URI as string;

const connectToDB = async () => {
  console.log("Connecting...");

  if (cached.conn) return cached.conn;

  if (!MONGO_URI) return new Error("MONGO_URI missing!");

  cached.promise =
    cached.promise ||
    mongoose.connect(MONGO_URI, {
      dbName: "Ahia",
      bufferCommands: false,
    } as mongoose.ConnectOptions);

  cached.conn = await cached.promise;

  return cached.conn;
};

export default connectToDB;
