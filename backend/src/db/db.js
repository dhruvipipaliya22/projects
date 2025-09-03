import mongoose from "mongoose"

const ConnectDB = async()=>{
    try{
           const connectionres = await mongoose.connect(`${process.env.MONGODB_URL}`);
    console.log("MongoDB is connected !!",`MongoDB Host:${connectionres.connection.host}`);
    }catch(err){
        console.log(`MongoDB is not connected !!`,err);
        process.exit(1);
    }
}

export default ConnectDB