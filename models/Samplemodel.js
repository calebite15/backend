const mongoose = require("mongoose");

const Sampleschema = mongoose.Schema(
  {
    //     sample: {
    //  type: String,
    //  require:[true,"can't be empty"],
    //  unique:true,
    //  default:"bite"
    // }
    title: {
      type: String,
      require: true,
    },
    assingnedTO: {
      type: String,
      require: true,
    },
    description: {
      type: String,
      require: true,
      minlength: [5, "minimuim length should not be less than 5 letter words"],
      maxlength: [500, "not more than 500 words"],
    },
    startDate: {
      type: Date,
      require: true,
    },
    endDate: {
      type: Date,
      require: true,
    },
    projectLink: {
      type: String,
      require: false,
    },
    isCompleted: {
      type: Boolean,
      require: false,
    },
    // projetIMG:[""],
    status: {
      type: String,
      enum: ["pending", "in progress", "completed"],
      default: "pending",
    },
  },
  {
    timestamp: true,
  }
);
module.exports = mongoose.model("Sample", Sampleschema);
