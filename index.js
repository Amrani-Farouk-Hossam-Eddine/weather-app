require("dotenv").config();
const express = require("express");
const cors = require("cors");
const rateLimit = require("express-rate-limit");
const weatherRoute = require("./routes/weather.route");

const app = express();

app.use(cors());
const PORT = process.env.PORT || 5000;
const limiter = rateLimit({
  windowMs: 10 * 60 * 1000,
  max: 100,
});
app.use(limiter);
app.set("trust proxy", 1);
app.use("/api", weatherRoute);
app.use(express.static("./public"));

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
