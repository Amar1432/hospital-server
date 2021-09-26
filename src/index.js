const express = require("express");
require("./db/connection.js");
const Ipd = require("./models/ipd");
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/opd", (req, res) => {
  res.send("this is opd section");
});

app.get("/ipd", async (req, res) => {
  try {
    const ipdRecords = await Ipd.find();
    res.status(200).send(ipdRecords);
  } catch (error) {
    res.status(404).send({});
  }
});

app.post("/ipd", async (req, res) => {
  const user = new Ipd(req.body);
  try {
    const newUser = await user.save();
    res.status(201).send(newUser);
  } catch (error) {
    console.log(error.message);
    res.status(400).send(error.message);
  }
});

app.patch("/ipd/:id", async (req, res) => {
  try {
    const updatedipd = await Ipd.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(201).send(updatedipd);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

app.listen(port, () => {
  console.log(`Connection successful and running on port ${port}`);
});
