const express = require("express");
const dotenv = require("dotenv").config();
const app = express();
const port = process.env.PORT;
const taskRoutes = require("./route/TaskRoute");
const colors = require("colors");
const connectDB = require("./controllers/config/db");
const UserRoute = require("./route/UserRoute");

const bodyParser = require("body-parser");
const cors = require("cors");
connectDB();
app.use(bodyParser.json());
// app.get("/find", (req, res) => {
//   const people = [
//     {
//       id: 1,
//       firstname: "chisom",
//       lastname: "henry",
//       isAdmin: false,
//     },
//     {
//       id: 2,
//       firstname: "glory",
//       lastname: "bush",
//       isAdmin: false,
//     },
//     {
//       id: 3,
//       firstname: "james",
//       lastname: "owen",
//       isAdmin: false,
//     },
//   ];

//   res.json({ message: "sucessfull", people });
// });
app.use("/task", taskRoutes);

app.use(cors());
app.use("/User", UserRoute);
app.use("/Login", UserRoute);
app.listen(port, () => console.log(`server running on port ${port}`.green));
