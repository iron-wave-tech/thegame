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
git clone https://github.com/ncumming/thegame.git
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
The application uses GitHub Actions for automatic deployment to GitHub Pages.

### Automatic Deployment
Push changes to the main branch and GitHub Actions will:
1. Build the application
2. Deploy to GitHub Pages
3. Make it available at https://ncumming.github.io/

### Manual Deployment
To deploy manually:
```bash
npm run deploy
```

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