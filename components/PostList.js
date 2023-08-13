import React, { useState, useEffect } from 'react';
import './PostList.css';
//import { fetchAllPosts, createBlogPost, deleteBlogPost } from './blog-backend/db'; // Import your database functions

const PostList = () => {
    const [posts, setPosts] = useState([]);
    const [newPostTitle, setNewPostTitle] = useState('');
    const [newPostContent, setNewPostContent] = useState('');

    useEffect(() => {
        fetchPosts();
    }, []);

    const fetchPosts = async () => {
        try {
            const response = await fetch('http://localhost:5000/api/posts');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json(); // Read the response JSON once
            setPosts(data); // Update the state with the fetched data
        } catch (error) {
            console.error('Error fetching posts:', error);
        }
    };
    
    
      
    const handleCreatePost = async () => {
        try {
            await fetch('http://localhost:5000/api/create', {
                method: 'POST', // Make sure it's a POST request
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ title: newPostTitle, content: newPostContent }),
            });
            // Clear input fields after successful creation
            setNewPostTitle('');
            setNewPostContent('');
            // Refresh the post list
            fetchPosts();
        } catch (error) {
            console.error('Error creating post:', error);
        }
    };
      
      const handleDeletePost = async (postId) => {
        try {
          await fetch(`http://localhost:5000/api/delete/${postId}`, {
            method: 'DELETE',
          });
          // Refresh the post list
          fetchPosts();
        } catch (error) {
          console.error('Error deleting post:', error);
        }
      };
    return (
        <div className="post-list-container">
            <header>
                <h2>My Blog Posts</h2>
            </header>
            <section className="post-list">
                {posts.map(post => (
                    <div className="post" key={post.id}>
                        <h3>{post.title}</h3>
                        <p>{post.content}</p>
                        <button onClick={() => handleDeletePost(post.id)}>Delete</button>
                    </div>
                ))}
            </section>
            <section className="post-form">
                <h3>Create New Post</h3>
                <input
                    type="text"
                    placeholder="Title"
                    value={newPostTitle}
                    onChange={e => setNewPostTitle(e.target.value)}
                />
                <textarea
                    placeholder="Content"
                    value={newPostContent}
                    onChange={e => setNewPostContent(e.target.value)}
                />
                <button onClick={handleCreatePost}>Create Post</button>
            </section>
            <footer>
                <p>&copy; 2023 My Blog</p>
            </footer>
        </div>
    );
};

export default PostList;
