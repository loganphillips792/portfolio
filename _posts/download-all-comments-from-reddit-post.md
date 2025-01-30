

1. Open a browser to the post
2. Scroll down so that as many comments are on the screen as you want


3. Copy and paste this script into the Dev Tools console

```javascript
(() => {
  // 1. Select all <p> elements in the document
  const paragraphElements = document.querySelectorAll('p');

  // 2. Extract inner text from each <p>, trimming and removing empty lines
  const textContent = [...paragraphElements]
    .map(el => el.innerText.trim())
    .filter(Boolean) // remove any blank paragraphs
    .join("\n\n---\n\n"); // join paragraphs with a delimiter

  // 3. If no paragraphs found or everything is empty, alert and return
  if (!textContent) {
    alert("No <p> tags found or they're empty.");
    return;
  }

  // 4. Create a Blob from the text
  const blob = new Blob([textContent], { type: 'text/plain' });
  const url = URL.createObjectURL(blob);

  // 5. Create a temporary download link and click it
  const link = document.createElement('a');
  link.href = url;
  link.download = 'paragraphs.txt'; // file name
  document.body.appendChild(link);
  link.click();

  // 6. Clean up temporary elements
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
})();
```

4. Drag and drop the downloaded file into ChatGPT with the following prompt:

Can you extract all `<whatever_you_want>` from this text file and format it into a bullet pointed list