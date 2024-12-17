const Tour = require('../models/tourModel');


// create a checkBody middleware
exports.checkBody = (req, res, next) => {
  // check if body contains the name and price property
  if (!req.body.name || !req.body.price) {
    return res.status(400).json({
      status: 'fail',
      message: 'Missing name or price'
    });
  }
  next();
}

exports.getAllTour = (req, res) => {
  res.status(200).json({
    status: 'success',
    requestedAt: req.requestTime,
  });
}

exports.getTour = (req, res) => {

  res.status(200).json({
    status: 'success',
  })
}

exports.createTour = (req, res) => {
  res.status(201).json({
    status: "success",
    data: {
      tour: newTour,
    },
  });
}

exports.updateTour = (req, res) => {
  res.status(200).json({
    status: 'success',
  });
}

exports.deleteTour = (req, res) => {
  res.status(204).json({
    status: 'success',
    data: null
  });
}