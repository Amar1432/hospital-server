const express = require("express");
require("./db/connection.js");
const app = express();
const port = process.env.PORT || 4000;
const cors = require("cors");

const opdRoute = require("./routes/opd");
const ipdRoute = require("./routes/ipd");

// Middleware

app.use(express.json());
app.use(
  cors({
    origin: "*",
  })
);
app.use("/opd", opdRoute);
app.use("/ipd", ipdRoute);


// Routes

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(port, () => {
  console.log(`Connection successful and running on port ${port}`);
});
