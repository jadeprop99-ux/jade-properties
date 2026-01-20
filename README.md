# Jade Property Finder - Seed + Demo App

This repository contains:
- properties.csv — seed data for property listings
- A small React + Vite + TypeScript demo app that loads the seed data and displays a simple listing UI.

Quick start:
1. Install dependencies:
   - npm install
2. Run dev server:
   - npm run dev
3. Build:
   - npm run build
4. Preview production build:
   - npm run preview

Notes:
- The app includes `src/data/properties.ts` which exports the sample data (derived from properties.csv).
- Feel free to replace `src/data/properties.ts` with a CSV parser that reads `data/properties.csv` at build time if you'd prefer CSV import.