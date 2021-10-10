const express = require("express");
const Ipd = require("../models/ipd");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const ipdRecords = await Ipd.find();
    res.status(200).send(ipdRecords);
  } catch (error) {
    res.status(404).send({});
  }
});

router.post("/", async (req, res) => {
  const user = new Ipd(req.body);
  try {
    const newUser = await user.save();
    res.status(201).send(newUser);
  } catch (error) {
    console.log(error.message);
    res.status(400).send(error.message);
  }
});

router.patch("/:id", async (req, res) => {
  try {
    const updatedipd = await Ipd.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(201).send(updatedipd);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

module.exports = router;
