const express = require('express');
const router = express.Router();
const ejs = require('ejs');
const fm = require('front-matter');
const { marked } = require('marked');
const fs = require('fs');
const { getAllBlogPosts } = require('../utils/blog');
const path = require('path');

router.get('/blog/posts/:articleName', (req, res) => {
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

module.exports = router;
