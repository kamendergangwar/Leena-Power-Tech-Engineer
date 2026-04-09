
const fs = require('fs');
const path = require('path');

const pageContentFile = fs.readFileSync(path.join(process.cwd(), 'src/data/pageContent.js'), 'utf8');

// Simple regex to find the export const pageContent = { ... }
// This is fragile but might work for this specific file
const pageContentMatch = pageContentFile.match(/export const pageContent = ({[\s\S]+?});\s+const asset/);
const pageImagesMatch = pageContentFile.match(/export const pageImages = ({[\s\S]+?});/);

let pageContent = {};
let pageImages = {};

if (pageContentMatch) {
    // We need to clean it up to be valid JSON
    let contentStr = pageContentMatch[1];
    // Replace [ROUTES.xxx] with "xxx"
    contentStr = contentStr.replace(/\[ROUTES\.(\w+)\]/g, '"$1"');
    // Replace keys without quotes
    contentStr = contentStr.replace(/(\w+):/g, '"$1":');
    // Remove trailing commas
    contentStr = contentStr.replace(/,\s*([}\]])/g, '$1');

    try {
        // This is still risky. Let's try to evaluate it if it's safe JS object
        // But for simplicity, I'll just try to parse it if it looks like JSON now
        // Or better yet, I'll use the specific keys I know.
    } catch (e) { }
}

// Since regex is hard for nested objects, I'll just write a script that exports it to JSON by running it in a way that provides ROUTES.
const ROUTES = {
    home: '/',
    about: '/about',
    directors: '/directors',
    awards: '/awards-recognitions',
    mep: '/mep-works',
    transmission: '/transmission',
    distribution: '/distribution',
    om: '/o-m',
    railways: '/railways-metro',
    solar: '/solar-system-installations',
    evcs: '/evcs',
    liftEscalators: '/ift-escalators',
    csr: '/csr',
    careers: '/careers',
    currentVacancy: '/current-vacancy',
    joinTeam: '/join-the-team',
    hrInitiatives: '/hr-initiatives',
    events: '/events',
    contact: '/contact',
};

const companyInfo = {
    phone: '022 61389100',
    email: 'info@lptindia.in',
    address: '13-15, Ground Floor, Sai Chambers, Sector-11, C.B.D Belapur, Navi Mumbai - 400614'
};

const asset = (path) => `/assets/${path.replace(/^\/+/, '')}`;

// I'll just copy the objects directly into this script and then JSON.stringify
// I'll do this in the next step.
