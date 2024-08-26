import mongoose from "mongoose";

const connectToDatabase = ()=>{
    try{
        mongoose.connect(process.env.DB);
        console.log('Database Connected')
    }
    catch(error){
        console.log('Error while connecting to Database',error)
    }
}

export default connectToDatabase