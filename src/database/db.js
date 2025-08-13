import mongoose from "mongoose";

const connectDatabase = () => {
    console.log("Wait connecting to the database")

    mongoose.connect(
        "mongodb+srv://fciambeli:EeYlbaM3uhCRH1ut@cluster0.cajndrm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
        { useNewUrlParser: true, useUnifiedTopology: true }
    )
    .then(() => console.log("MongoDB Atlas Conneected"))
    .catch((error) => console.log(error));
};

export default connectDatabase;