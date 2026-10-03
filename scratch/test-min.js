const fs = require('fs');

const sample = `
/* Test comment */
:root {
  --accent-color: #8D1B2D;
  --default-font: "Roboto", sans-serif;
}

.hero {
  color: var(--accent-color);
  margin: 0px 10px;
}
`;

function safeMinify(css) {
  return css
    // Remove comments
    .replace(/\/\*[\s\S]*?\*\//g, '')
    // Normalize newlines and tabs to space
    .replace(/[\r\n\t]+/g, ' ')
    // Remove space around { } ; ,
    .replace(/\s*([\{\}\;\,])\s*/g, '$1')
    // Remove space before and after colon, but NOT inside values like url() or data:
    .replace(/\s*:\s*/g, ':')
    // Remove trailing semicolons before }
    .replace(/;\}/g, '}')
    // Collapse multiple spaces to single space
    .replace(/ {2,}/g, ' ')
    .trim();
}

console.log('Sample result:', safeMinify(sample));
