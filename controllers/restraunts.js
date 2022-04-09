const Restraunts = require("../models/Restraunts");

exports.getRestaunts = async (req, res, next) => {
  console.log(req.query.keyword);
  const resl = await Restraunts.find({
    $or: [
      {
        "Restaurant Name": {
          $regex: req.query.keyword,
          $options: "i",
        },
      },
      {
        Cuisines: {
          $regex: req.query.keyword,
          $options: "i",
        },
      },
      {
        Locality: {
          $regex: req.query.keyword,
          $options: "i",
        },
      },
    ],
  });
  if (resl) {
    return res.status(200).json({
      resl,
      total: resl.length,
      message: "success",
    });
  } else {
    return res.status(404).json({
      error: "Restraunts not found",
    });
  }
};
