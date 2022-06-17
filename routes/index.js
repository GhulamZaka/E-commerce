const router = require("express").Router();

const apiRoutes = require("./api");
//const categoryRoutes = require("./api/category-routes.js");

router.use("/api", apiRoutes);
//router.use("/category", categoryRoutes);

router.use((req, res) => {
  res.send("<h1>Wrong Route GMZ!</h1>");
});

module.exports = router;
