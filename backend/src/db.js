import mongoose from "mongoose";
import { DB_URL } from "./config.js";

export const connectDB = async () => {
    try {
        await mongoose.connect(DB_URL);
        console.log(">>> connection established to database ");
    }
    catch (error) {
        console.log("< Error connecting to database" , + dbURL);
    }
}

/* export function connectDB() {
    mongoose.connect(dbURL)
  .then(() => {
    console.log(">>> Conexión exitosa a la base de datos");
  })
  .catch(error => {
    console.error("< Error al conectarse a la base de datos:", error);
  });
  
} */