# Naked Truths Card Game

A fun, interactive card game for couples built with modern web technologies. Perfect for deepening relationships through engaging questions and conversations.

## Features
- Interactive card flipping animations
- Modern, sleek design with TailwindCSS
- Automatic card shuffling
- Responsive layout for all devices
- Progressive difficulty levels

## Setup
1. Clone the repository:
```bash
git clone https://github.com/iron-wave-tech/thegame.git
cd thegame
```

2. Install dependencies:
```bash
npm install
```

## Development
To run the development server:
```bash
npm run dev
```
This will start the Vite dev server at http://localhost:3000

## Build and Preview
To create a production build:
```bash
npm run build
```

To preview the production build locally:
```bash
npm run preview
```

## Deployment

This project is automatically deployed to GitHub Pages using GitHub Actions. The deployment workflow runs on:
- Every push to the `main` branch
- Manual trigger through GitHub Actions

### Automatic Deployment
Push your changes to the `main` branch and the site will be automatically deployed to GitHub Pages.

### Manual Deployment
To trigger a manual deployment:
1. Go to the [Actions tab](https://github.com/iron-wave-tech/thegame/actions) in the repository
2. Select the "Deploy to GitHub Pages" workflow
3. Click "Run workflow"
4. Select the branch you want to deploy from
5. Click "Run workflow"

The deployed site will be available at: `https://iron-wave-tech.github.io/thegame/`

Note: Make sure GitHub Pages is enabled in your repository settings and configured to deploy from the `gh-pages` branch.

## Project Structure
```
├── index.html         # Entry point
├── script.jsx         # Main React application
├── style.css         # Custom styles
├── vite.config.js    # Vite configuration
└── .github/workflows # GitHub Actions configuration
```

## Technologies Used
- React 17
- Vite
- TailwindCSS
- GitHub Actions (CI/CD)
- HTML5/CSS3
- JavaScript

## Development Flow
1. Make changes to the code
2. Test locally with `npm run dev`
3. Commit and push changes
4. GitHub Actions automatically deploys to GitHub Pages

## Contributing
Feel free to submit issues and pull requests.

## License
ISC 