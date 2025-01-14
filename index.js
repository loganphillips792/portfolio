const express = require('express');
const path = require('path');

const app = express();

const indexRoutes = require('./routes/index');
const blogRoutes = require('./routes/blog');

// Set the view engine to EJS
app.set('view engine', 'ejs');
// Serve static files from the public folder
app.use(express.static(path.join(__dirname, 'public')));

// Use routes
app.use('/', indexRoutes);
app.use('/', blogRoutes);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
