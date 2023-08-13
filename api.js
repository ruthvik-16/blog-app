const express = require('express');
const router = express.Router();
const db = require('./db');

// Fetch all posts
router.get('/posts', async (req, res) => {
  try {
    const posts = await db.fetchAllPosts();
    res.json(posts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Create a new post
// Create a new post
router.post('/create', (req, res) => {
  const { title, content } = req.body;
  db.createBlogPost(title, content);
  res.sendStatus(200);
});


// Delete a post
router.delete('/delete/:id', async (req, res) => {
  const postId = req.params.id;
  db.deleteBlogPost(postId);
  res.sendStatus(200);
});

module.exports = router;
