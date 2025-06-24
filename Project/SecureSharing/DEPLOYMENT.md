# 🚀 SecureSharing Deployment Guide

## Quick Deploy (Docker - Recommended)

### Prerequisites
1. Install [Docker Desktop](https://www.docker.com/products/docker-desktop/)
2. Make sure Docker is running

### Deploy in 3 Steps:

#### Windows:
```cmd
# Run the deployment script
deploy.bat
```

#### Linux/Mac:
```bash
# Make script executable
chmod +x deploy.sh

# Run deployment
./deploy.sh
```

#### Manual Docker Deploy:
```bash
# Build and start all services
docker-compose up --build -d

# Check status
docker-compose ps

# View logs
docker-compose logs -f
```

### Access Your App:
- **Frontend**: http://localhost
- **Backend API**: http://localhost:8000
- **Database**: MongoDB running on port 27017

---

## Cloud Deployment Options

### Option 1: Railway (Easiest)

#### Backend:
1. Go to [Railway](https://railway.app)
2. Sign up with GitHub
3. Click "New Project" → "Deploy from GitHub repo"
4. Select your SecureSharing repo
5. Choose the `backend` folder
6. Add environment variables:
   ```
   NODE_ENV=production
   PORT=8000
   MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/SecureSharing
   ACCESS_TOKEN_SECRET=your-super-secure-secret-key
   ```
7. Deploy!

#### Frontend:
1. Go to [Vercel](https://vercel.com)
2. Import your GitHub repo
3. Set root directory to `frontend`
4. Deploy!

### Option 2: Heroku

#### Backend:
```bash
# Install Heroku CLI
npm install -g heroku

# Login and create app
heroku login
heroku create your-app-name-backend

# Set environment variables
heroku config:set NODE_ENV=production
heroku config:set MONGODB_URI=your-mongodb-atlas-uri
heroku config:set ACCESS_TOKEN_SECRET=your-secret-key

# Deploy
git subtree push --prefix backend heroku main
```

#### Frontend:
```bash
# Create frontend app
heroku create your-app-name-frontend

# Deploy
git subtree push --prefix frontend heroku main
```

### Option 3: DigitalOcean/AWS/VPS

#### Setup Script:
```bash
# Update system
sudo apt update && sudo apt upgrade -y

# Install Node.js
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs

# Install MongoDB
wget -qO - https://www.mongodb.org/static/pgp/server-6.0.asc | sudo apt-key add -
echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu focal/mongodb-org/6.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-6.0.list
sudo apt-get update
sudo apt-get install -y mongodb-org

# Start MongoDB
sudo systemctl start mongod
sudo systemctl enable mongod

# Install PM2
sudo npm install -g pm2

# Clone and setup your app
git clone https://github.com/yourusername/SecureSharing.git
cd SecureSharing

# Backend setup
cd backend
npm install
pm2 start server.js --name "securesharing-api"

# Frontend setup
cd ../frontend
npm install
npm run build

# Install and configure Nginx
sudo apt install nginx
sudo cp /path/to/your/nginx.conf /etc/nginx/sites-available/securesharing
sudo ln -s /etc/nginx/sites-available/securesharing /etc/nginx/sites-enabled/
sudo systemctl restart nginx
```

---

## Environment Variables

### Required for Production:
```env
# Backend (.env)
NODE_ENV=production
PORT=8000
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/SecureSharing
ACCESS_TOKEN_SECRET=generate-a-super-secure-secret-key-here
```

### Generate Secure Secret:
```bash
# Generate a secure JWT secret
node -e "console.log(require('crypto').randomBytes(64).toString('hex'))"
```

---

## Database Setup (MongoDB Atlas)

1. Go to [MongoDB Atlas](https://cloud.mongodb.com)
2. Create free account
3. Create new cluster (free tier)
4. Create database user
5. Whitelist IP addresses (0.0.0.0/0 for development)
6. Get connection string
7. Replace in environment variables

---

## Domain Setup (Optional)

### With Cloudflare:
1. Buy domain from any registrar
2. Add to Cloudflare
3. Point A record to your server IP
4. Enable SSL (automatic)

### SSL Certificate:
```bash
# Install Certbot
sudo apt install certbot python3-certbot-nginx

# Get certificate
sudo certbot --nginx -d yourdomain.com

# Auto-renewal
sudo crontab -e
# Add: 0 12 * * * /usr/bin/certbot renew --quiet
```

---

## Monitoring & Maintenance

### View Logs:
```bash
# Docker logs
docker-compose logs -f

# PM2 logs
pm2 logs

# System logs
sudo journalctl -u nginx -f
```

### Backup Database:
```bash
# MongoDB backup
mongodump --uri="your-mongodb-uri" --out=backup-$(date +%Y%m%d)
```

### Update Application:
```bash
# Pull latest changes
git pull

# Restart services
docker-compose up --build -d
# OR
pm2 restart all
```

---

## Troubleshooting

### Common Issues:

1. **Port already in use**:
   ```bash
   sudo lsof -i :8000
   sudo kill -9 <PID>
   ```

2. **MongoDB connection failed**:
   - Check MongoDB Atlas IP whitelist
   - Verify connection string
   - Check network connectivity

3. **Frontend can't reach backend**:
   - Update API_BASE_URL in frontend
   - Check CORS settings
   - Verify backend is running

4. **File uploads not working**:
   - Check uploads directory permissions
   - Verify multer configuration
   - Check file size limits

### Support:
- Check logs first: `docker-compose logs -f`
- Verify environment variables
- Test API endpoints manually
- Check network connectivity

---

## Security Checklist

- [ ] Strong JWT secret key
- [ ] HTTPS enabled
- [ ] Database authentication
- [ ] File upload limits
- [ ] CORS properly configured
- [ ] Environment variables secured
- [ ] Regular backups
- [ ] Monitoring enabled

🎉 **Your SecureSharing app is now deployed and ready to use!**
