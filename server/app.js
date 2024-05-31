const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const imageRoutes = require("./routes/imageRoute");

const app = express();

app.use(express.json());

const PORT = process.env.PORT || 8080;

app.use("/api", imageRoutes)


const db = async () => {
    try {
        const connection = await mongoose.connect("mongodb://localhost:27017/fileupload");
        if(connection) {
            console.log("db connection success");
            app.listen(PORT, () => console.log(`server running on http://localhost:${PORT}`))
        }
    } catch(error) {
       console.log(error.message)
    }
};

db();







