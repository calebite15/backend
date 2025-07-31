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
    const createNewTask = await TaskModel.create({
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
module.exports = SignUp;
