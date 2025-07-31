const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const UserSchema = mongoose.Schema(
  {
    ///sample is an example of a data field structure
    // title: {
    //   type: String,
    //   require: true,
    // },
    firstname: {
      type: String,
      require: true,
    },

    lastName: {
      type: String,
      require: true,
    },
    phonenumber: {
      type: String,
      require: true,
    },
    Email: {
      type: String,
      require: true,
      unique: true,
    },
    password: {
      type: String,
      require: true,
    },
    Isadmin: {
      type: String,
      require: false,
    },
    role: {
      type: "",
      require: false,
    },
    wishlist: {
      type: [],
      require: true,
    },
  },

  {
    timestamp: true,
  }
);
UserSchema.pre("save", async function (next) {
  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(this.password, salt);
    this.password = hashedPassword;
    next();
  } catch (error) {
    next(error);
  }
});
module.exports = mongoose.model("User", UserSchema);
