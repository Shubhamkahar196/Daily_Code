#!/bin/bash

echo "🚀 Starting SecureSharing Deployment..."

# Check if Docker is installed
if ! command -v docker &> /dev/null; then
    echo "❌ Docker is not installed. Please install Docker first."
    exit 1
fi

# Check if Docker Compose is installed
if ! command -v docker-compose &> /dev/null; then
    echo "❌ Docker Compose is not installed. Please install Docker Compose first."
    exit 1
fi

# Stop existing containers
echo "🛑 Stopping existing containers..."
docker-compose down

# Remove old images
echo "🧹 Cleaning up old images..."
docker-compose down --rmi all

# Build and start services
echo "🔨 Building and starting services..."
docker-compose up --build -d

# Wait for services to start
echo "⏳ Waiting for services to start..."
sleep 30

# Check if services are running
echo "🔍 Checking service status..."
docker-compose ps

# Test backend health
echo "🏥 Testing backend health..."
if curl -f http://localhost:8000 > /dev/null 2>&1; then
    echo "✅ Backend is running!"
else
    echo "❌ Backend is not responding"
fi

# Test frontend
echo "🌐 Testing frontend..."
if curl -f http://localhost > /dev/null 2>&1; then
    echo "✅ Frontend is running!"
else
    echo "❌ Frontend is not responding"
fi

echo ""
echo "🎉 Deployment complete!"
echo "📱 Frontend: http://localhost"
echo "🔧 Backend API: http://localhost:8000"
echo ""
echo "📋 To view logs: docker-compose logs -f"
echo "🛑 To stop: docker-compose down"
