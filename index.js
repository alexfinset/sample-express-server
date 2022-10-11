const express = require("express");
const { STATUS_CODES } = require("http");
const app = express();
const cors = require("cors");
const port = 3000;

const SHOULD_THROW = false;

app.use(
  cors({
    origin: "*",
  })
);

app.get("/api/income", (req, res) => {
  if (SHOULD_THROW) {
    res.status(403).json({ message: STATUS_CODES[403] });
  } else {
    res.status(200).json({ income: 1000 });
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
