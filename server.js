const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5000;
const apiRoutes = require('./api');
const path = require('path');

app.use(cors());
app.use(express.json()); // Add this line to parse request bodies as JSON
app.use('/images', express.static(path.join(__dirname, 'blog-backend', 'images')));

// Use API routes
app.use('/api', apiRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
