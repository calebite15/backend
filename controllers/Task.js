const TaskModel = require("../models/TaskModel");
///fecth all data
const GetAllData = async (req, res) => {
  try {
    gleTask;
    const result = await TaskModel.sort({ createdart: -1 });
    res.status(303).json(result);
  } catch (error) {
    res.status(303).json({
      message: " failed to fecth data",
    });
  }
};
//fecth single data
const GetSingleData = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await TaskModel.findById(id);
    if (!result) {
      return res.status(406).json({
        message: `task${id}not found`,
      });
    } else {
      res.status(201).json(result);
    }
  } catch (error) {
    res.status(303).json({
      message: "fecth failed",
    });
  }
};
//update data
const UpdateSingleData = async (req, res) => {
  const { id } = req.params;
  const {
    title,
    assingnedTO,
    description,
    startDate,
    endDate,
    projectLink,
    isCompleted,
    status,
  } = req.body;
  try {
    const result = await TaskModel.findById(id);
    if (!result) {
      return res.status(406).json({
        message: `task${id}not found`,
      });
    } else {
      result.title = title || result.title;
      result.assingnedTO = assingnedTO || result.assingnedTO;
      result.description = description || result.description;
      result.startDate = startDate || result.startDate;
      result.endDate = endDate || result.endDate;
      result.projectLink = projectLink || result.projectLink;
      result.isCompleted = isCompleted || result.isCompleted;
      result.status = status || result.status;
      await result.save();
      res.status(201).json(result);
    }
  } catch (error) {
    res.status(303).json({
      message: " failed to update",
    });
  }
};
const DeleteSinglData = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await TaskModel.findByIdAndDelete(id);
    if (!result) {
      return res.status(406).json({
        message: `task${id}not found`,
      });
    } else {
      res.status(201).json({ message: `Task ${id} deleted successfully` });
    }
  } catch (error) {
    res.status(303).json({
      message: "internal server error",
    });
  }
};
///post data
const createTask = async (reg, res) => {
  const { title, assingnedTO, description, startDate, endDate } = reg.body;
  try {
    ///check is task exists in data base
    const projectExist = await TaskModel.findOne({ title, assingnedTO });
    if (projectExist) {
      res.status(405).json({
        message: "Task Assigned to this user",
      });
    }

    ///to create new task
    const createNewTask = await TaskModel.create({
      title,
      assingnedTO,
      description,
      startDate,
      endDate,
    });
    ///saving ecerything is the reg.boby to the data base
    const taskResult = await createNewTask.save();

    ///where im returning the data if sucessfull
    res.status(200).json(taskResult);
    //or

    res.status(200).json({
      _id: taskResult._id,
      tittle: taskResult.title,
      assingnedTO: taskResult.assingnedTO,
      description: taskResult.description,
      startDate: taskResult.startDate.TaskModel,
      endDate: taskResult.endDate,
    });
  } catch (error) {
    res.status(404).json({ message: "failed to fecth data" });
  }
};

module.exports = {
  createTask,

  GetAllData,

  GetSingleData,

  UpdateSingleData,
  DeleteSinglData,
};
