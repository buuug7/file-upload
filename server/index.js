const express = require("express");
const multer = require("multer");
const path = require("path");
const cors = require("cors");

const storage = multer.diskStorage({
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  },
  destination: "uploads/",
});

const upload = multer({
  storage: storage,
});

const app = express();
app.use(cors());

app.post("/files", upload.array("files[]"), (req, res, next) => {
  return res.json(req.files);
});

const port = 3000;

app.listen(port, () => {
  console.log(`Server is listen in ${port}`);
});
