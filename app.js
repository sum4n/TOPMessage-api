const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

const messageRouter = require("./routes/message");

app.use("/api", messageRouter);

app.listen(PORT, () => {
  console.log(`App is listening of port: ${PORT}`);
});
