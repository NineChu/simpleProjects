const express = require("express");
const path = require("path");
const router = require("./router");
const app = express();

app.use("public", express.static(path.join(__dirname, "front", "public")));
// app.set("view engine", "html"); // don't need
app.set("views", path.join(__dirname, "front", "views"));
app.use("/", router);

const listener = app.listen(80, () => {
  console.log("Server listening in port " + listener.address().port);
});
