import express from "express";
import colors from "colors";
import connectDB from "./connection/db.js";
import morgan from "morgan";
import cors from "cors";
import dotenv from "dotenv";
import auth from "./routes/auth.js";
import addrecipe from "./routes/addrecipe.js"
import Subscription from "./model/Subscription.js";
const app = express();
dotenv.config();

const PORT = process.env.PORT || 8080;


connectDB();

app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

app.use("/", auth);

app.use("/register", cors());
app.use("/login", cors());

app.post("/subscribe", async (req, res) => {

  const { email } = req.body;

  try {
    // Create a new subscription document
    const newSubscription = new Subscription({ email });

    // Save the subscription to the database
    await newSubscription.save();

    // Respond with a success message
    res.status(201).json({ message: "Subscription successful" });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Subscription failed" });
  }
});
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`.bgCyan.white);
});
