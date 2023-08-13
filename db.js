const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('blog.db');

const createBlogPost = (title, content) => {
    const insertStatement = db.prepare('INSERT INTO posts (title, content) VALUES (?, ?)');
    insertStatement.run(title, content);
    insertStatement.finalize();
};


const deleteBlogPost = (postId) => {
    db.run('DELETE FROM posts WHERE id = ?', postId);
};

db.serialize(() => {
    // Create the posts table with an additional column for image URLs
    db.run('CREATE TABLE IF NOT EXISTS posts (id INTEGER PRIMARY KEY, title TEXT, content TEXT)');


    // Insert sample posts with image URLs
    const insertStatement = db.prepare('INSERT INTO posts (title, content) VALUES (?, ?)');
    insertStatement.run('First Post', 'This is the updated content of the first post.');
    insertStatement.run('Second Post', 'This is the updated content of the second post.');
    //Add more insert statements for additional posts
    insertStatement.finalize(); // Finalize the statement after all inserts
});


const fetchAllPosts = () => {
    return new Promise((resolve, reject) => {
        db.all('SELECT * FROM posts', (err, rows) => {
            if (err) {
                reject(err);
            } else {
                resolve(rows);
            }
        });
    });
};

module.exports = {
    db,
    createBlogPost,
    deleteBlogPost,
    fetchAllPosts
};
