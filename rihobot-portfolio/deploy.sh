#!/bin/bash
echo "🚀 Starting GitHub Pages Deployment..."

# Install if missing
if ! command -v npx &> /dev/null; then
  echo "Installing Node.js packages..."
  npm install
fi

# Install gh-pages
echo "📦 Installing gh-pages..."
npm install gh-pages --save-dev

# Build site
echo "🏗️ Building site..."
npm run build

# Deploy
echo "☁️ Deploying to GitHub Pages..."
npx gh-pages -d out -t true

echo "✅ Done! Check https://YOUR_USERNAME.github.io/rihobot-portfolio"