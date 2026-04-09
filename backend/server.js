const express = require('express');
const cors = require('cors');
const path = require('path');
const fs = require('fs');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5001;
const FRONTEND_DIST_PATH = path.resolve(__dirname, '..', 'dist');
const CONTENT_PATH = path.join(__dirname, 'data', 'content.json');

app.use(cors());
app.use(express.json());

// Serve static assets
app.use('/assets', express.static(path.join(__dirname, 'public/assets')));
app.use('/assets/assets', express.static(path.join(__dirname, 'public/assets')));

// API Routes
app.get('/api/content', (req, res) => {
    try {
        if (fs.existsSync(CONTENT_PATH)) {
            const data = fs.readFileSync(CONTENT_PATH, 'utf8');
            res.json(JSON.parse(data));
        } else {
            res.status(404).json({ error: 'Content not found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch content' });
    }
});

app.get('/api/health', (req, res) => {
    res.json({ ok: true });
});

if (fs.existsSync(FRONTEND_DIST_PATH)) {
    app.use(express.static(FRONTEND_DIST_PATH));

    app.get(/^(?!\/(?:api|assets)(?:\/|$)).*/, (req, res) => {
        res.sendFile(path.join(FRONTEND_DIST_PATH, 'index.html'));
    });
}

app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server is running on port ${PORT}`);
});
