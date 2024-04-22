import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import router from "./routes/userRoute.js";
const app = express();

app.use(cors());
app.use(express.json());

app.listen(5000, () => {
  console.log("Server started on 5000");
});

mongoose
  .connect("mongodb+srv://**************@cluster0.qdroxu7.mongodb.net/MS")
  .then(console.log("Database Connected"))
  .catch((error) => console.log(error));

app.use("/api/users", router);
