const express = require('express');
const { marked } = require('marked');
const fs = require('fs');
const path = require('path');
const ejs = require('ejs');
const fm = require('front-matter');

const { getAllBlogPosts } = require('./utils/blog');

const app = express();
const PORT = 3000;
// Set the view engine to EJS
app.set('view engine', 'ejs');
// Serve static files from the public folder
app.use(express.static(path.join(__dirname, 'public')));
// Create a route for each Markdown post

/*
fs.readdir('./posts', (err, files) => {
    files.forEach((file) => {
        const name = file.split('.')[0];
        const filePath = path.join(__dirname, 'posts', file);
        const fileContents = fs.readFileSync(filePath, 'utf8');

        const content = fm(fileContents);
        const html = marked(content.body);
        // const html = marked(fileContents);
        // const content = fm(fileContents);
        app.get(`/${name}`, (req, res) => {
            console.log(html);
            console.log(content);
            res.render('post', { title: name, content: html });
        });
    });
});
*/

app.get('/blog/posts/:articleName', (req, res) => {
    console.log('Hello world', req.params);

    userSlug = req.params.articleName;

    let directory = '_posts';
    let mdFiles = fs
        .readdirSync(directory)
        .filter((file) => path.extname(file) === '.md');

    getAllBlogPosts();

    let mdFilesArray = mdFiles.map((file) => {
        let slug = path.basename(file, path.extname(file));
        let filePath = path.join(directory, file);
        let fileContent = fs.readFileSync(filePath, 'utf-8');

        const content = fm(fileContent);
        const html = marked(content.body);

        console.log(content.attributes);

        return {
            slug,
            html,
            content,
        };
    });

    let post = mdFilesArray.find((post) => (post.slug = userSlug));
    res.render('post', {
        title: post.content.attributes.title,
        content: post.html,
    });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
