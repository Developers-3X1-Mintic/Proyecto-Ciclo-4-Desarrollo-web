import dotenv from "dotenv";

dotenv.config({path:"../.env"})


export const MONGODB_URI = process.env.MONGODB_URI || "mongodb+srv://developers:123Rr@clusterprinc.crxbi6b.mongodb.net/developers3x1?retryWrites=true&w=majority"
export const PORT = process.env.PORT || 5050