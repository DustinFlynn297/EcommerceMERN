const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRoute = require("./routes/user")
const authenticationRoute = require("./routes/authentication")


dotenv.config();

mongoose
.connect(process.env.MONGO_URL)
.then(()=>console.log("DB Connection Successful"))
.catch((err)=> {
    console.log(err)
});

app.use(express.json())
app.use("/api/auth", authenticationRoute)
app.use("/api/users", userRoute)

app.listen(process.env.PORT || 5000, ()=>{
    console.log("Backend server is running!")
})