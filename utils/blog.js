const express = require('express');
const router = express.Router();
const ejs = require('ejs');
const fm = require('front-matter');
const { marked } = require('marked');
const fs = require('fs');
const { getAllBlogPosts } = require('../utils/blog');
const path = require('path');
const hljs = require('highlight.js');

module.exports = {
    getAllBlogPosts: function getAllBlogPosts() {
        console.log('getAllBlogPosts');

        let directory = '_posts';

        let mdFiles = fs
            .readdirSync(directory)
            .filter((file) => path.extname(file) === '.md')
            .map((file) => {
                let slug = path.basename(file, path.extname(file));
                let filePath = path.join(directory, file);
                let fileContent = fs.readFileSync(filePath, 'utf-8');

                const content = fm(fileContent);

                return {
                    slug: slug,
                    content: content,
                };
            });

        // console.log('MD FILES', mdFiles);

        return mdFiles;
    },
};
