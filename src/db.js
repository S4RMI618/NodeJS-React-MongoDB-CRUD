import mongoose from "mongoose";


export const connectDB = async () => {
    const dbURL = "mongodb://127.0.0.1:27017/nrmdb";
    try {
        await mongoose.connect(dbURL);
        console.log(">>> connection established to database " + dbURL);
    }
    catch (error) {
        console.log("< Error connecting to database" , error);
    }
}

/* export function connectDB() {

    const dbURL = "mongodb://127.0.0.1:27017/nrmdb";

    mongoose.connect(dbURL)
  .then(() => {
    console.log(">>> Conexión exitosa a la base de datos");
  })
  .catch(error => {
    console.error("< Error al conectarse a la base de datos:", error);
  });
  
} */