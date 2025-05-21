require("dotenv").config();
const express = require("express");
const priceRoutes = require("./routes/coinGeko.routes");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api", priceRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
