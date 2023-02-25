const express = require("express");
const router = express.Router();
//posts Model
const Posts = require("../../models/Posts");
// @desc GET ALL post
router.post("/", async (req, res) => {
  const newPost = new Posts(req.body);
  try {
    const post = await newPost.save();
    if (!post) throw Error("No ITEMS");
    res.status(200).json(post);
    // res.send(posts);
  } catch (err) {
    res.status(400).json({ msg: err });
  }
});
// router.get("/", (req, res) => {
//   //   res.send("lets create post");
//   console.log(req.body);
// });

// router.post("/", (req, res) => {
//   console.log(req.body);
//   //   res.send("lets create post");
//   // console.log(req.body);
// });
module.exports = router;
