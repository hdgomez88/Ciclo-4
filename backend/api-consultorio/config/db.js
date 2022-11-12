import mongoose from "mongoose";

const conectarDB =async () => {
    try {
        const connection =await mongoose.connect(
            process.env.MONGO_URI, {
                useNewUrlParser: true,
                UseUnifiedTopology: true
            }
        );

        const url= `${connection.connection.host}:${connection.connection.port}`
        console.log(`MondoDB conectado en ${url}`);
    } catch (error) {
        console.log(`Error: ${error.message}`);
        process.exit(1);
    }
}

export default conectarDB;