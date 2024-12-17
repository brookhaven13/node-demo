const express = require("express");
const {
  getAllTour,
  getTour,
  createTour,
  updateTour,
  deleteTour,
  checkBody,
} = require("../controllers/tourController");

const router = express.Router();

router.route("/")
  .get(getAllTour)
  .post(checkBody, createTour);

router.route("/:id")
  .get(getTour)
  .patch(updateTour)
  .delete(deleteTour);

module.exports = router;
