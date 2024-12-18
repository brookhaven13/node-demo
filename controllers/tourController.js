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

exports.getTour = async (req, res) => {
  try {
    const id = req.params.id;
    const tour = await Tour.findById(id);

    res.status(200).json({
      status: "success",
      data: {
        tour,
      },      
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: error?.errmsg,
    });
    
  }
};

exports.updateTour = async (req, res) => {
  try {
    const id = req.params.id;
    await Tour.findByIdAndUpdate(id, req.body);

    res.status(200).json({
      status: "success",
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: error?.errmsg,
    });    
  }
};

exports.deleteTour = async (req, res) => {
  try {
    const id = req.params.id;
    await Tour.findByIdAndDelete(id);

    res.status(204).json({
      status: "success",
      data: null,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: error?.errmsg,
    });
  }
};
