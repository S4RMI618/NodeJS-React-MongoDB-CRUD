import mongoose from "mongoose";
import { dbURL } from "./config.js";

export const connectDB = async () => {
    try {
        await mongoose.connect(dbURL);
        console.log(">>> connection established to database " + dbURL);
    }
    catch (error) {
        console.log("< Error connecting to database" , error);
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