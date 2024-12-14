import mongoose from "mongoose";

const DBConnection = async () =>{
    try {
        await mongoose.connect(`mongodb://127.0.0.1:27017/shoes-db`)
        console.log(`DATA IS ASLO RUNNING SUCCESSFULL`.bgBlue);
    } catch (error) {
        console.log(`ERROR IN BACKEND SETUP`.bgRed);
    }
}

export default DBConnection