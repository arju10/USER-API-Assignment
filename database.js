const mongoose = require("mongoose");
// const dotenv = require("dotenv");
// dotenv.config({ path: './config.env' });

const connectDatabase = () => {
    mongoose.connect(process.env.DB_URI,
        {
          useNewUrlParser: true,
        //   useFindAndModify: false,
          useUnifiedTopology: true
        }
      ).then((data) => {
          console.log(`mongodb is connected with server: ${data.connection.host}`)
      }).catch((error) => {
          console.log("database error:",error);
      })
}

module.exports  = connectDatabase;