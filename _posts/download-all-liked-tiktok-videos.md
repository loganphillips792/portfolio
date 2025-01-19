---
title: Download all liked tiktok videos
date: 2023-04-01
author: John Doe
---

# hello world

1. Login to your TikTok account on a Desktop
2. Open developer tools
3. 'allow pasting'
4. paste the following code the dev tools console to scroll to the bottom of your liked videos list. This is because all videos need to be loaded into the browser to be able to download them all

```js
function autoScroll() {
    window.scrollTo(0, document.body.scrollHeight);
    setTimeout(autoScroll, 1000); // Scrolls every second
}

autoScroll();
```

5. Paste the following code to download all of your liked videos.

```js
// Note: This needs to be run in the browser console while on the TikTok liked videos page
// You'll need to scroll through your liked videos first to load them

async function downloadLikedTikToks() {
    // Helper function to download a single video
    async function downloadVideo(url, filename) {
        try {
            const response = await fetch(url);
            const blob = await response.blob();
            const downloadLink = document.createElement('a');
            downloadLink.href = URL.createObjectURL(blob);
            downloadLink.download = filename;
            downloadLink.click();
            URL.revokeObjectURL(downloadLink.href);
        } catch (error) {
            console.error(`Failed to download ${filename}:`, error);
        }
    }

    // Get all video elements from the page
    const videoElements = document.querySelectorAll('div[data-e2e="user-liked-item"]');
    const totalVideos = videoElements.length;
    
    console.log(`Found ${totalVideos} liked videos`);

    // Create array to store video information
    const videos = [];

    // Extract video information
    videoElements.forEach((element, index) => {
        const videoLink = element.querySelector('a[href*="/video/"]');
        if (videoLink) {
            const videoId = videoLink.href.split('/video/')[1];
            const username = element.querySelector('[data-e2e="video-author-nickname"]')?.innerText || 'unknown';
            videos.push({
                url: videoLink.href,
                filename: `tiktok_${username}_${videoId}.mp4`,
                username: username
            });
        }
    });

    // Download videos with delay to prevent rate limiting
    console.log('Starting downloads...');
    for (let i = 0; i < videos.length; i++) {
        const video = videos[i];
        console.log(`Downloading ${i + 1}/${videos.length}: ${video.filename}`);
        await downloadVideo(video.url, video.filename);
        // Wait 1 second between downloads to avoid overwhelming the browser
        await new Promise(resolve => setTimeout(resolve, 1000));
    }

    console.log('Download complete!');
}

// Run the function
downloadLikedTikToks();
```