---
title: Download all comments from tiktok video
date: 2023-04-01
author: John Doe
---

```js
// Function to scrape comments
function scrapeComments() {
    // Select all comment elements
    const commentElements = document.querySelectorAll('[data-e2e="comment-level-1"]');

    // Extract the text from each comment
    const comments = Array.from(commentElements).map(el => el.innerText);

    // Log the comments to the console
    console.log("Comments scraped:", comments);

    return comments;
}

// Function to save comments to a text file
function saveCommentsToFile(comments) {
    // Create a single string with each comment on a new line
    const text = comments.join('\n');

    // Create a Blob object with the text content
    const blob = new Blob([text], {
        type: 'text/plain'
    });
    const url = URL.createObjectURL(blob);

    // Create a download link
    const link = document.createElement('a');
    link.href = url;
    link.download = 'comments.txt'; // File name
    document.body.appendChild(link);

    // Trigger the download
    link.click();

    // Clean up the link
    document.body.removeChild(link);

    console.log("Comments saved to comments.txt");
}

// Scrape the comments and save them to a file
const comments = scrapeComments();
saveCommentsToFile(comments);
```
