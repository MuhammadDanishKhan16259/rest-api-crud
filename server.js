const express = require("express");
const mongoose = require("mongoose");
const { MONGO_URI } = require("./config");
//name: Danish123 pass:Danish123

//ROUTES
const postsRoutes = require("./routes/api/posts");

const app = express();

//BodyPArser Middleware
app.use(express.json());

// app.get("/", (req, res) => {
//   res.send("Hello from node");
// });

//Connect to MONGODB
mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MONGODB"))
  .catch((err) => console.log(err));

//User routes
app.use("/api/posts", postsRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is listening at port ${PORT}`);
});
