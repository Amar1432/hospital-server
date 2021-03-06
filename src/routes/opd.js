const express = require("express");
const Opd = require("../models/opd");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const opdRecords = await Opd.find();
    res.status(200).send(opdRecords);
  } catch (error) {
    res.status(404).send({});
  }
});

router.post("/", async (req, res) => {
  const user = new Opd(req.body);
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
    const updatedOpd = await Ipd.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(201).send(updatedOpd);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

module.exports = router;
