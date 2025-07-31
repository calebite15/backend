const express = require("express");
const {
  createTask,
  UpdateSingleData,
  GetSingleData,
  GetAllData,
  DeleteSinglData,
} = require("../controllers/Task");
const router = express.Router();
router.get("/", GetAllData);
router.get("/:id", GetSingleData);

router.post("/", createTask);
router.put("/:id", UpdateSingleData);
router.delete("/:id", DeleteSinglData);
module.exports = router;
