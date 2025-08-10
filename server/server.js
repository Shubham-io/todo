import express from "express";
import "dotenv/config";
import mongoose from "mongoose";
import cors from "cors";
const app = express();
import TodoRouter from "./routes/TodoRouter.js";

const port = process.env.PORT || 5001;

app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

const connectDB = async () => {
  try {
    // logging the connection details
    mongoose.connection.on("connected", () =>
      console.log("Database Connected")
    );
    // connecting with database
    await mongoose.connect(`${process.env.MONGODB_URI}/todo`);
  } catch (error) {
    console.error(error.message);
  }
};

connectDB();

app.use("/api/todos", TodoRouter);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
