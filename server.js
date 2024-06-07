const express = require('express');
const path = require('path');
const history = require('connect-history-api-fallback');

const app = express();

const distPath = path.join(__dirname, 'dist', 'spa');
app.use(express.static(distPath));

const staticFileMiddleware = express.static(distPath);

app.use(staticFileMiddleware);
app.use(history({
  disableDotRule: true,
  verbose: true
}));
app.use(staticFileMiddleware);

// Handle all routes to serve index.html
app.get('*', (req, res) => {
    res.sendFile(path.join(distPath, 'index.html'));
});

const port = process.env.PORT || 80;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
