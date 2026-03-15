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
      <script src="https://cdn.jsdelivr.net/npm/animejs@4/lib/anime.iife.min.js"></script>
      <style>
        .square {
          width: 40px;
          height: 40px;
          background: #7c3aed;
          border-radius: 6px;
        }
      </style>
    </head>
    <body>
      <div class="bg-red-100 p-4">
Custom Packages installed: TAILWIND and dotenv(for password managing), express for server, animejs for animations</div>
      <div class="bg-purple-100 p-4 m-4 rounded">
        <h2 class="text-lg font-bold">Environment Variables from .env (loaded via dotenv):</h2>
        <p><strong>Secret:</strong> ${process.env.Secret}</p>
      </div>
      <div class="bg-indigo-50 p-4 m-4 rounded">
        <h2 class="text-lg font-bold mb-4">Anime.js Demo</h2>
        <div class="flex gap-2">
          <div class="square"></div>
          <div class="square"></div>
          <div class="square"></div>
          <div class="square"></div>
          <div class="square"></div>
        </div>
      </div>
      <script>
        const { animate, stagger } = anime;
        animate('.square', {
          x: 320,
          rotate: { from: -180 },
          duration: 1250,
          delay: stagger(65, { from: 'center' }),
          ease: 'inOutQuint',
          loop: true,
          alternate: true
        });
      </script>
    </body>
    </html>
  `);
});

app.listen(8080, () => {
  console.log('Server running on port 8080');
});
