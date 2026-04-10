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

// API Routes
const readContentData = () => {
    if (!fs.existsSync(CONTENT_PATH)) {
        const error = new Error('Content not found');
        error.status = 404;
        throw error;
    }

    const rawData = fs.readFileSync(CONTENT_PATH, 'utf8');
    return JSON.parse(rawData);
};

app.get('/api/content', (req, res) => {
    try {
        const content = readContentData();
        res.json(content);
    } catch (error) {
        res.status(error.status || 500).json({ error: error.message || 'Failed to fetch content' });
    }
});

app.get('/api/content/bootstrap', (req, res) => {
    try {
        const content = readContentData();
        const pagePaths = Object.keys(content.pageContent || {});

        res.json({
            companyInfo: content.companyInfo,
            navigation: content.navigation,
            routes: content.routes,
            pagePaths,
        });
    } catch (error) {
        res.status(error.status || 500).json({ error: error.message || 'Failed to fetch bootstrap content' });
    }
});

app.get('/api/content/home', (req, res) => {
    try {
        const content = readContentData();

        res.json({
            heroSlides: content.heroSlides || [],
            welcomeContent: content.welcomeContent || {},
            reasons: content.reasons || [],
            services: content.services || [],
            stats: content.stats || [],
            testimonials: content.testimonials || [],
            clientLogos: content.clientLogos || [],
        });
    } catch (error) {
        res.status(error.status || 500).json({ error: error.message || 'Failed to fetch home content' });
    }
});

app.get('/api/content/page', (req, res) => {
    try {
        const pathKey = typeof req.query.path === 'string' ? req.query.path.trim() : '';
        if (!pathKey) {
            return res.status(400).json({ error: 'Query param "path" is required' });
        }

        const content = readContentData();
        const page = content.pageContent?.[pathKey];
        const images = content.pageImages?.[pathKey];
        const specialPage = content.specialPages?.[pathKey];

        if (!page && !images && !specialPage) {
            return res.status(404).json({ error: `No page content found for ${pathKey}` });
        }

        res.json({
            path: pathKey,
            pageContent: page || null,
            pageImages: images || null,
            specialPage: specialPage || null,
        });
    } catch (error) {
        res.status(error.status || 500).json({ error: error.message || 'Failed to fetch page content' });
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
