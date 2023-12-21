
import mongoose from 'mongoose';

mongoose.set("strictQuery", true);
mongoose.connect("mongodb://0.0.0.0:27017/note-app").then(() =>{
    console.log("Connected to DB!")
}).catch((err) => {
    console.log("DB Connection Failed: ", err);
})

