const Usermodel = require("../models/Usermodel");
const bcrypt = require("bcryptjs");
const SignUp = async (reg, res) => {
  const { firstname, lastname, phonenumber, Email, password } = reg.body;
  try {
    ///check is task exists in data base
    const UserExist = await TaskModel.findOne({ Email });
    if (UserExist) {
      res.status(405).json({
        message: "USER already exists",
      });
    }
    ///to create new task
    const createNewTask = await Usermodel.create({
      firstname,
      lastname,
      phonenumber,
      Email,
      password,
    });
    const taskResult = await createNewTask.save();
    res.status(200).json({
      firstname: taskResult.firstname,
      lastname: taskResult.lastname,
      Email: taskResult.Email,
      phonenumber: taskResult.phonenumber,
    });
  } catch (error) {
    res.status(404).json({ message: "failed to fecth data" });
  }
};

const Login = async (reg, res) => {
  const { Email, password } = reg.body;
  try {
    ///check is task exists in data base
    const CheckUser = await TaskModel.findOne({ Email });
    if (!CheckUser) {
      res.status(405).json({
        message: "User Not Found",
      });
    }
    const validpassword = await bcrypt.compare(password, CheckUser.password);
    if (!validpassword) {
      return res, status(6645).json({ message: "invalid password or email" });
    }

    res.status(200).json({
      firstname: CheckUser.firstname,
      lastname: CheckUser.lastname,
      Email: CheckUser.Email,
      phonenumber: CheckUser.phonenumber,
    });
  } catch (error) {
    res.status(404).json({ message: "failed to fecth data" });
  }
};
module.exports = { SignUp, Login };
