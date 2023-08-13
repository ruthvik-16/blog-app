import React from 'react';
import './App.css';
import PostList from './components/PostList';
import Navigation from './components/Header'; // Import the Navigation component



function App() {
  return (
    <div className="App">
      {/* Include the Navigation component */}
      <Navigation />

      <h1>My Blog</h1>
      <PostList />
    </div>
  );
}

export default App;
