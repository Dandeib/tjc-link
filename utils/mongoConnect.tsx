import mongoose from "mongoose";

let cached: typeof mongoose | null = null;

const mongoConnect = async (): Promise<typeof mongoose> => {
  if (cached) return cached;
  
  const connection = await mongoose.connect("");
  cached = connection;

  console.log('connected to db');
  
  return cached;
};

export default mongoConnect;
