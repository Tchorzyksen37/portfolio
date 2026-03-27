# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a React-based portfolio/CV application published to GitHub Pages. It features bilingual support (English/Polish), separate academic and professional CV pages, and PDF export functionality.

## Development Commands

```bash
# Start development server (runs on http://localhost:3000)
npm start

# Build for production
npm run build

# Run tests
npm test

# Run a single test file
npm test -- --testPathPattern=<pattern> --watchAll=false

# Deploy to GitHub Pages (requires: npm run build first)
npm run deploy

# Deploy shorthand (runs build automatically via predeploy)
npm run deploy
```

## Architecture

### Core Structure
- **Routing**: React Router with three main routes:
  - `/` → Home page (hides navbar)
  - `/uni-cv` → Academic CV
  - `/work-cv` → Professional CV

### Language Management
- **LanguageContext** (`src/context/LanguageContext.jsx`): Manages language state with:
  - Default language: English (`en`)
  - Supported languages: English (`en`), Polish (`pl`)
  - Persistence: Language preference stored in localStorage
  - Hook: `useLanguage()` provides `{language, toggleLanguage}` to components

- **Translation Pattern**: Components implement inline translation objects:
  ```javascript
  const translations = {
    en: { key: "English text" },
    pl: { key: "Polski tekst" }
  };
  const t = translations[language];
  ```

### PDF Export
- **Utility**: `src/utils/pdfExport.js` exports `exportToPdf(elementId, filename)`
- **Process**: html2canvas → jsPDF with A4 formatting and auto-pagination
- **Clone approach**: Creates DOM clone to preserve original rendering while applying print styles

### Styling
- **Base**: Bootstrap 5 (`src/index.js` imports bootstrap.min.css)
- **Custom**: `src/styles.css` and `src/components/styles.css` for component-specific styles
- **Navbar**: Hidden on homepage (check `location.pathname` in Navbar.jsx)

## Deployment

Configured for GitHub Pages at `https://tchorzyksen37.github.io/cv/`:
- `homepage` in package.json sets the base path
- `gh-pages` package handles deployment
- Deploy with `npm run deploy` (runs predeploy build automatically)

## Dependencies to Know

- **@fortawesome/react-fontawesome**: Icon library for buttons and links
- **html2canvas + jsPDF**: PDF export functionality
- **react-router-dom**: Client-side routing
- **bootstrap**: CSS framework (5.3.3)

## Component Structure

New components should follow the existing pattern:
1. Accept `language` via `useLanguage()` hook
2. Define inline translations object
3. Use conditional rendering for language-specific content
4. Place component-specific styles in `src/components/styles.css` or inline
