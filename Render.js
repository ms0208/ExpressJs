const express = require('express');
const app = express();
const path = require('path');

const publicPath = path.join(__dirname, 'public');
app.use(express.static(publicPath));

// Route for the home page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Route for the about page
app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'about.html'));
});

app.listen(4000, () => {
    console.log('Server is running on port 4000');
});
