const express = require('express');
const router = express.Router();
const ejs = require('ejs');
const fm = require('front-matter');
const { marked } = require('marked');
const fs = require('fs');
const { getAllBlogPosts } = require('../utils/blog');
const path = require('path');
const hljs = require('highlight.js');

// hljs.registerLanguage('javascript', javascript);

// Configure marked to use highlight.js
marked.setOptions({
    highlight: function (code, lang) {
        if (lang && hljs.getLanguage(lang)) {
            return hljs.highlight(lang, code).value;
        }
        return hljs.highlightAuto(code).value;
    },
});

// get all blog posts
router.get('/blog/posts', (req, res) => {
    console.log('Getting all blog posts...');

    let blogPosts = getAllBlogPosts();

    console.log('Blog Posts', blogPosts);

    res.render('pages/blog', {
        // title: post.content.attributes.title,
        pageTitle: 'Blog',
        posts: blogPosts,
    });
});

// get a specific blog post
router.get('/blog/posts/:articleName', (req, res) => {
    console.log('Hello world', req.params);

    userSlug = req.params.articleName;

    let directory = '_posts';
    let mdFiles = fs
        .readdirSync(directory)
        .filter((file) => path.extname(file) === '.md');

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

    let post = mdFilesArray.find((post) => post.slug === userSlug);

    res.render('post', {
        pageTitle: post.content.attributes.title,
        content: post.html,
    });
});

module.exports = router;
