import React from 'react';
import PostList from '../components/PostList';

const Home = ({ posts }) => {
  return (
    <div className="home-page">
      <h1>Welcome to My Blogs</h1>
      <PostList posts={posts} />
    </div>
  );
};

export default Home;
