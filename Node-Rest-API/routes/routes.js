const express = require("express");
const router = express.Router();
const Alien = require("../models/models");

// fetch all data
router.get("/", async (req, res) => {
  try {
    const aliens = await Alien.find();
    res.json(aliens);
  } catch (err) {
    res.send("Error " + err);
  }
});

// find by ID
router.get("/:id", async (req, res) => {
  try {
    const alien = await Alien.findById(req.params.id);
    res.json(alien);
  } catch (err) {
    res.send("Error " + err);
  }
});

// insert data
router.post("/", async (req, res) => {
  const alien = new Alien({
    name: req.body.name,
    location: req.body.location,
    tech: req.body.tech,
    date_created:req.body.date_created
  });

  try {
    const a1 = await alien.save();
    res.json(a1);
  } catch (err) {
    res.send("Error"+err);
  }
});

// edit by ID
router.patch("/:id", async (req, res) => {
  try {
    const alien = await Alien.findById(req.params.id);
    alien.location = req.body.location;
    alien.name = req.body.name;
    alien.tech = req.body.tech;
    const a1 = await alien.save();
    res.json(a1);
  } catch (err) {
    res.send("Error"+err);
  }
});

module.exports = router;
