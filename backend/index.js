import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";

dotenv.config({ path: "./config.env" });
const app = express();
app.use(
  cors({
    origin: [process.env.FRONTEND_URL],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(process.env.PORT, () => {
  console.log(`Server listening on port ${process.env.PORT}`);
});
