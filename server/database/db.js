import mongoose from "mongoose";

const DBConnection=async ()=>{
    const MONGODB_URI=`mongodb://sakshipachlaniya:aCcJuh6wriyRCbQ7@sharemedia-shard-00-00.4xwmx.mongodb.net:27017,sharemedia-shard-00-01.4xwmx.mongodb.net:27017,sharemedia-shard-00-02.4xwmx.mongodb.net:27017/?ssl=true&replicaSet=atlas-byit2c-shard-0&authSource=admin&retryWrites=true&w=majority&appName=sharemedia`;
    try{
    await mongoose.connect(MONGODB_URI,{useNewUrlParser:true});
     console.log('database connected succesfully');
    }catch(error){
        console.error('error while connecting to database',error.message);
    }
}

export default DBConnection;