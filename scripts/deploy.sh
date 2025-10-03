#!/bin/bash

# Atelier del Gelato - Deployment Script
# This script helps deploy the website to Vercel

echo "🍨 Atelier del Gelato - Deployment Script"
echo "========================================"

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "❌ Error: Please run this script from the project root directory"
    exit 1
fi

# Check if Vercel CLI is installed
if ! command -v vercel &> /dev/null; then
    echo "📦 Installing Vercel CLI..."
    npm install -g vercel
fi

# Build the project
echo "🔨 Building the project..."
npm run build

if [ $? -eq 0 ]; then
    echo "✅ Build successful!"
else
    echo "❌ Build failed!"
    exit 1
fi

# Deploy to Vercel
echo "🚀 Deploying to Vercel..."
vercel --prod

if [ $? -eq 0 ]; then
    echo "🎉 Deployment successful!"
    echo "🌐 Your website is now live!"
else
    echo "❌ Deployment failed!"
    exit 1
fi

echo "🍨 Thank you for using Atelier del Gelato!"
