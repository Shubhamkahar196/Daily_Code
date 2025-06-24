@echo off
echo 🚀 Starting SecureSharing Deployment...

REM Check if Docker is installed
docker --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ Docker is not installed. Please install Docker Desktop first.
    pause
    exit /b 1
)

REM Check if Docker Compose is available
docker-compose --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ Docker Compose is not available. Please install Docker Desktop.
    pause
    exit /b 1
)

REM Stop existing containers
echo 🛑 Stopping existing containers...
docker-compose down

REM Build and start services
echo 🔨 Building and starting services...
docker-compose up --build -d

REM Wait for services to start
echo ⏳ Waiting for services to start...
timeout /t 30 /nobreak >nul

REM Check service status
echo 🔍 Checking service status...
docker-compose ps

echo.
echo 🎉 Deployment complete!
echo 📱 Frontend: http://localhost
echo 🔧 Backend API: http://localhost:8000
echo.
echo 📋 To view logs: docker-compose logs -f
echo 🛑 To stop: docker-compose down
echo.
pause
