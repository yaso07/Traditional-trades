const express = require("express");
let app = express();
let cors = require("cors");

const dotEnv = require("dotenv");
dotEnv.config({ path: "./config.env" });
app.use(express.json());
app.use(cors())
const mongoose = require("mongoose");
mongoose.connect(process.env.connection, {}).then((con) => {
  console.log("db connected");
});
var corsOptions = {
  origin:"http://localhost:5173",
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};
const productRouter= require("./routes/productRoutes");
const customerRouter=require("./routes/CustomerRoutes");
const sellerRouter=require('./routes/SellerRoutes')
app.use("/api/products",productRouter);
app.use("/api/customers",customerRouter);
app.use("/api/seller",sellerRouter)

app.listen(process.env.port, () => {
  console.log(`listening on http://localhost:${process.env.port}`);
});
 
 
