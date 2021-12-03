const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRoute = require("./routes/user")
const authenticationRoute = require("./routes/authentication")
const productRoute = require("./routes/product")
const cartRoute = require("./routes/product")


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
app.use("/api/products", productRoute)
app.use("/api/cart", cartRoute)

app.listen(process.env.PORT || 5000, ()=>{
    console.log("Backend server is running!")
})