const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 5000;

// Serve static files from the React app
app.use(express.static(path.join(__dirname, "client/build")));

// Serve the index.html for all other routes
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client/build", "index.html"));
});

// Dynamic route for /innovation
app.get("/innovation", (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="utf-8">
      <title>Innovating Education with Artificial Intelligence</title>
      <meta name="description" content="Edu Pro Solution offers a comprehensive school management system with features like online exams, report cards, school fees payment, and more." />
      <meta property="og:title" content="Innovating Education with Artificial Intelligence" />
      <meta property="og:description" content="Edu Pro Solution offers a comprehensive school management system with features like online exams, report cards, school fees payment, and more." />
      <meta property="og:image" content="URL to your image" />
      <meta property="og:url" content="https://www.edupro.com.ng/innovation" />
    </head>
    <body>
      <div id="root"></div>
      <script src="/static/js/main.js"></script>
    </body>
    </html>
  `);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
