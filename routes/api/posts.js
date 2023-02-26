const express = require("express");
const router = express.Router();
//posts Model
const Posts = require("../../models/Posts");
// @desc GET api/post
// @desc Create All post
router.get("/", async (req, res) => {
  try {
    const posts = await Posts.find();
    if (!posts) throw new Error("No posts found");
    res.status(200).json(posts);
  } catch (err) {
    res.status(400).json({ msg: err });
  }
});

// @routes POST api/posts
// @desc Create An post
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

// @desc DELETE api/post/:id
// @desc delete An post
router.delete("/:id", async (req, res) => {
  try {
    const posts = await Posts.findByIdAndDelete(req.params.id);
    if (!posts) throw Error("No POST FOUND!");
    res.status(200).json({ Success: true });
    // res.send(posts);
  } catch (err) {
    res.status(400).json({ msg: err });
  }
});

// try {
//   const posts = await Posts.find();
//   if (!posts) throw new Error("No posts found");
//   res.status(200).json(posts);
// } catch (err) {
//   res.status(400).json({ msg: err });
// }

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
