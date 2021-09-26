const mongoose = require("mongoose");

// const CONNECTION_URL =
//   "mongodb+srv://akki:1432@cluster0.nladb.mongodb.net/hospital-management?retryWrites=true&w=majority";

const CONNECTION_URL =
  "mongodb://127.0.0.1:27017/hospital-management";

mongoose
  .connect(CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Database connection successful");
  })
  .catch((e) => {
    console.log(e);
  });
