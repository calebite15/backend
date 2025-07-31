const mongoose = require("mongoose");

const Sampleschema = mongoose.Schema(
  {
    //     sample: {
    //  type: String,
    //  require:[true,"can't be empty"],
    //  unique:true,
    //  default:"bite"
    // }

    ///sample is an example of a data field structure
    title: {
      type: String,
      require: true,
    },
  },
  {
    timestamp: true,
  }
);
module.exports = mongoose.model("Sample", Sampleschema);
