#!/bin/bash

# CD IT Solutions - Development Script
# Quick commands for common tasks

echo "🚀 CD IT Solutions - Development Helper"
echo "========================================"
echo ""

case "$1" in
  start|dev)
    echo "Starting development server..."
    npm run dev
    ;;
  
  build)
    echo "Building for p    npm run dev    ./dev.sh start    ./dev.sh start    ./dev.sh start    ./dev.sh start    ./dev.sh start    ./dev.sh start    ./dev.sh start    ./dev.sh start    ./dev.sh start    ./dev.sh start    ./dev.sh start    ./dev.sh start    ./dev.sh start    ./dev.sh start    ./dev.sh start    ./dev.sh startroduction..."
    npm run build
    ;;
  
  preview)
    echo "Previewing production build..."
    npm run preview
    ;;
  
  install)
    echo "Installing dependencies..."
    npm install
    ;;
  
  clean)
    echo "Cleaning node_modules and reinstalling..."
    rm -rf node_modules package-lock.json
    npm install
    ;;
  
  *)
    echo "Available commands:"
    echo "  ./dev.sh start    - Start development server"
    echo "  ./dev.sh build    - Build for production"
    echo "  ./dev.sh preview  - Preview production build"
    echo "  ./dev.sh install  - Install dependencies"
    echo "  ./dev.sh clean    - Clean install"
    echo ""
    echo "Or use npm directly:"
    echo "  npm run dev      - Development server"
    echo "  npm run build    - Production build"
    echo "  npm run preview  - Preview build"
    ;;
esac
