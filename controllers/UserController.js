const Usermodel = require("../models/Usermodel");
const bcrypt = require("bcryptjs");

const SignUp = async (req, res) => {
  const { firstname, lastName, phonenumber, Email, password } = reg.body;
  try {
    ///check is task exists in data base
    const UserExist = await Usermodel.findOne({ Email });
    if (UserExist) {
      res.status(405).json({
        message: "USER already exists",
      });
    }
    ///to create new task
    const createNewUser = await Usermodel.create({
      firstname,
      lastName,
      phonenumber,
      Email,
      password,
    });
    const taskResult = await createNewUser.save();
    res.status(200).json({
      firstname: taskResult.firstname,
      lastName: taskResult.lastName,
      Email: taskResult.Email,
      phonenumber: taskResult.phonenumber,
    });
  } catch (error) {
    res.status(404).json({ message: "failed to fecth data" });
  }
};

const Login = async (req, res) => {
  const { Email, password } = req.body;
  try {
    ///check is task exists in data base
    const CheckUser = await Usermodel.findOne({ Email });
    if (!CheckUser) {
      res.status(405).json({
        message: "User Not Found",
      });
    }
    const validpassword = await bcrypt.compare(password, CheckUser.password);
    if (!validpassword) {
      return res, status(664).json({ message: "invalid password or email" });
    }

    res.status(200).json({
      firstname: CheckUser.firstname,
      lastName: CheckUser.lastName,
      Email: CheckUser.Email,
      phonenumber: CheckUser.phonenumber,
    });
  } catch (error) {
    res.status(404).json({ message: "failed to fecth data" });
  }
};
module.exports = { SignUp, Login };
