const Tour = require("../models/tourModel");

exports.createTour = async (req, res) => {
  try {
    const newTour = await Tour.create(req.body);

    res.status(201).json({
      status: "success",
      data: {
        tour: newTour,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: error?.errmsg,
    });
  }
};

exports.getAllTour = async (req, res) => {
  try {
    const tours = await Tour.find();

    res.status(200).json({
      status: "success",
      requestedAt: req.requestTime,
      results: tours.length,
      data: {
        tours,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: error?.errmsg,
    });
  }
};

exports.getTour = (req, res) => {
  res.status(200).json({
    status: "success",
  });
};

exports.updateTour = (req, res) => {
  res.status(200).json({
    status: "success",
  });
};

exports.deleteTour = (req, res) => {
  res.status(204).json({
    status: "success",
    data: null,
  });
};
