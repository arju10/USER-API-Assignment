const express = require('express')
// const cors = require("cors");
const app = express()
const dotenv = require('dotenv')
const connectDatabase = require("./database");
dotenv.config({path:"./config.env"})

// app.use(cors());
app.use(express.json());

// Connecting Database
connectDatabase();


// Importing Routes
const user = require("./routes/userRoute");
app.use("/user",user);
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port http://localhost:${process.env.PORT}`)
})