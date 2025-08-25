import mongoose from "mongoose";

const connectDatabase = () => {
    console.log("Wait connecting to the database")
    console.log(process.env)
    mongoose
    .connect( process.env.MONGODB_URI ,
        
        { 
            useNewUrlParser: true, useUnifiedTopology: true 
        }
    )
    .then(() => console.log("MongoDB Atlas Conneected"))
    .catch((error) => console.log(error));
};

export default connectDatabase;