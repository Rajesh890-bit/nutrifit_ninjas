const express = require("express");
const { connection } = require("./config/db");
const { userRouter } = require("./routes/user.route");
const { foodRouter } = require("./routes/food.route");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(cors());

app.use("/user", userRouter);
app.use("/food", foodRouter);

app.listen(process.env.PORT, async () => {
  try {
    await connection;
    console.log(`Server runnin on port ${process.env.PORT}`);
    console.log("Connected to DB!!");
  } catch (error) {
    console.log("Connection Failed!!");
    console.log(error);
  }
});
