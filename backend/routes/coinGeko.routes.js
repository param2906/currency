const express = require("express");
const router = express.Router();
const { fetchPrices, fetchHistorical } = require("../controllers/coinGeko");
const cacheMiddleware = require("../middleware/cacheMiddleware");

router.get("/prices", cacheMiddleware, fetchPrices);
router.get("/historical", cacheMiddleware, fetchHistorical);

module.exports = router;
