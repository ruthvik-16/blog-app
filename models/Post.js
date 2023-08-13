const db = require('./db');

// Define the Post model
class Post {
  constructor(id, title, content) {
    this.id = id;
    this.title = title;
    this.content = content;
  }

  static fetchAll(callback) {
    db.all('SELECT * FROM posts', (err, rows) => {
      if (err) {
        callback(err);
        return;
      }
      const posts = rows.map(row => new Post(row.id, row.title, row.content));
      callback(null, posts);
    });
  }

  static fetchById(id, callback) {
    db.get('SELECT * FROM posts WHERE id = ?', id, (err, row) => {
      if (err) {
        callback(err);
        return;
      }
      if (!row) {
        callback(new Error('Post not found'));
        return;
      }
      const post = new Post(row.id, row.title, row.content);
      callback(null, post);
    });
  }

  // Add methods for other CRUD operations if needed
}

module.exports = Post;
