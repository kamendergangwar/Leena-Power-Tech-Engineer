const express = require('express');
const cors = require('cors');
const path = require('path');
const fs = require('fs');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5001;

app.use(cors());
app.use(express.json());

// Serve static assets
app.use('/assets', express.static(path.join(__dirname, 'public/assets')));

// API Routes
app.get('/api/content', (req, res) => {
    try {
        const contentPath = path.join(__dirname, 'data', 'content.json');
        if (fs.existsSync(contentPath)) {
            const data = fs.readFileSync(contentPath, 'utf8');
            res.json(JSON.parse(data));
        } else {
            res.status(404).json({ error: 'Content not found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch content' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
