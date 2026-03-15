require('dotenv').config();
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send(`
    <html lang="en">
    <head>
      <meta charset="UTF-8"/>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      <title>Test</title>
      <script src="https://cdn.tailwindcss.com"></script>
    </head>
    <body>
      <div class="bg-red-100 p-4">
Custom Packages installed: TAILWIND and dotenv(for password managing), express for server</div>
      <div class="bg-purple-100 p-4 m-4 rounded">
        <h2 class="text-lg font-bold">Environment Variables from .env (loaded via dotenv):</h2>
        <p><strong>Secret:</strong> ${process.env.Secret}</p>
      </div>
    </body>
    </html>
  `);
});

app.listen(8080, () => {
  console.log('Server running on port 8080');
});
