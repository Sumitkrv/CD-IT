#!/bin/bash

# Production Build Script for CD IT Solutions
# This script builds the project with optimal settings

echo "🚀 Starting production build for CD IT Solutions..."

# Clean previous build
echo "🧹 Cleaning previous build..."
rm -rf dist

# Build with production optimizations
echo "📦 Building application..."
NODE_ENV=production npm run build

# Check if build was successful
if [ $? -eq 0 ]; then
    echo "✅ Build successful!"
    echo ""
    echo "📊 Build Statistics:"
    du -sh dist
    echo ""
    echo "📁 Generated files:"
    ls -lh dist/assets/*.js 2>/dev/null | awk '{print $9, $5}'
    echo ""
    echo "✨ Your site is ready for deployment!"
    echo "📍 Build output: ./dist"
    echo ""
    echo "Next steps:"
    echo "1. Test locally: npm run preview"
    echo "2. Deploy the 'dist' folder to your hosting"
    echo ""
else
    echo "❌ Build failed! Please check the errors above."
    exit 1
fi
