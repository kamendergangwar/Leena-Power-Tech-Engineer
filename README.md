# Leena-Power-Tech-Engineer

This project supports two deployment modes:

- Full-stack deployment on a Node host such as Render, where the Express backend serves both `/api/*` and the built React app.
- GitHub Pages deployment for the frontend-only build using `npm run deploy`.

## Local development

Run the frontend and backend together:

```bash
npm run dev:full
```

The Vite app will use `http://localhost:5001` automatically during local development.

## Full-stack deployment

The repo includes `render.yaml` for deploying a single Node web service on Render.

Build and start behavior:

- `npm run build` builds the React app into `dist/`
- `npm start` starts the Express server in `backend/server.js`
- the Express server serves `/api/content`, `/api/health`, built frontend files from `dist/`, and backend assets from `/assets/*`

## GitHub Pages deployment

Use:

```bash
npm run deploy
```

That build uses the repo subpath `/Leena-Power-Tech-Engineer/`. For GitHub Pages with a separately hosted backend, set `VITE_API_URL` at build time so the frontend can reach the API.
