const dotenv = require("dotenv");

const mongoose = require("mongoose");

dotenv.config({
  path: `${__dirname}/../config.env`,
});

const app = require("./app");

const DB = mongoose
  .connect(
    process.env.DATABASE.replace("<PASSWORD>", process.env.DATABASE_PASSWORD)
  )
  .then(() => {
    console.log("DATABASE IS UP AND RUNNING...");
  })
  .catch((error) => {
    console.log(error);
  });

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server started on port ${port}...`);
});
