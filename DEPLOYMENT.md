# AWS Lightsail Deployment Guide

This guide will walk you through deploying your RailDevHub SPA to AWS Lightsail using Docker.

## Prerequisites

- AWS Account
- AWS CLI installed and configured (optional but helpful)
- Docker installed locally (for testing)
- Git installed on your local machine

## Step-by-Step Deployment Instructions

### Step 1: Test Docker Build Locally (Optional but Recommended)

1. **Build the Docker image locally:**
   ```bash
   docker build -t railhubpage:latest .
   ```

2. **Test the container:**
   ```bash
   docker run -p 8080:80 railhubpage:latest
   ```

3. **Verify it works:**
   - Open your browser and go to `http://localhost:8080`
   - Test all routes to ensure SPA routing works correctly
   - Stop the container with `Ctrl+C`

### Step 2: Create AWS Lightsail Container Service

1. **Log in to AWS Console:**
   - Go to [AWS Lightsail Console](https://lightsail.aws.amazon.com/)

2. **Create a Container Service:**
   - Click "Create container service"
   - Choose a name (e.g., `railhubpage`)
   - Select a power level (Nano is sufficient for testing, but you may want Medium for production)
   - Select a scale (1 container is fine to start)
   - Choose a region closest to your users
   - Click "Create container service"

### Step 3: Push Your Docker Image to a Container Registry

You have two options:

#### Option A: Use AWS ECR (Recommended for AWS)

1. **Create an ECR repository:**
   ```bash
   aws ecr create-repository --repository-name railhubpage --region us-east-1
   ```

2. **Get login token and login to ECR:**
   ```bash
   aws ecr get-login-password --region us-east-1 | docker login --username AWS --password-stdin <your-account-id>.dkr.ecr.us-east-1.amazonaws.com
   ```

3. **Tag and push your image:**
   ```bash
   docker tag railhubpage:latest <your-account-id>.dkr.ecr.us-east-1.amazonaws.com/railhubpage:latest
   docker push <your-account-id>.dkr.ecr.us-east-1.amazonaws.com/railhubpage:latest
   ```

#### Option B: Use Docker Hub

1. **Login to Docker Hub:**
   ```bash
   docker login
   ```

2. **Tag and push your image:**
   ```bash
   docker tag railhubpage:latest <your-dockerhub-username>/railhubpage:latest
   docker push <your-dockerhub-username>/railhubpage:latest
   ```

### Step 4: Configure Lightsail Container Service

1. **In Lightsail Console:**
   - Go to your container service
   - Click "Create deployment"

2. **Configure the deployment:**
   - **Container name:** `railhubpage-app`
   - **Image:** 
     - If using ECR: `<your-account-id>.dkr.ecr.us-east-1.amazonaws.com/railhubpage:latest`
     - If using Docker Hub: `<your-dockerhub-username>/railhubpage:latest`
   - **Port mapping:** 
     - Container port: `80`
     - Protocol: `HTTP`
   - **Environment variables:** (Add any if needed)
   - **Public endpoint:** Enable this

3. **Click "Save and deploy"**

### Step 5: Configure Custom Domain (Optional but Recommended)

1. **Get your public endpoint:**
   - After deployment, Lightsail will provide a public endpoint URL
   - It will look like: `railhubpage-xxxxx.us-east-1.cs.amazonlightsail.com`

2. **Add a custom domain:**
   - In Lightsail Console, go to your container service
   - Click "Custom domains" tab
   - Click "Create custom domain"
   - Enter your domain name (e.g., `raildevhub.com`)
   - Follow the DNS configuration instructions

3. **Configure DNS:**
   - Go to your domain registrar (e.g., Route 53, GoDaddy, etc.)
   - Add a CNAME record pointing to your Lightsail endpoint
   - Wait for DNS propagation (can take up to 48 hours, usually much faster)

### Step 6: Set Up HTTPS (SSL/TLS)

1. **In Lightsail Console:**
   - Go to your container service
   - Click "Custom domains" tab
   - Click on your domain
   - Click "Enable SSL/TLS"
   - Lightsail will automatically provision a certificate via ACM (AWS Certificate Manager)

### Step 7: Monitor and Maintain

1. **Check logs:**
   - In Lightsail Console, go to your container service
   - Click "Logs" tab to view container logs

2. **Monitor metrics:**
   - Click "Metrics" tab to see CPU, memory, and network usage

3. **Update your application:**
   - Build a new Docker image with a new tag (e.g., `v1.1.0`)
   - Push it to your registry
   - Create a new deployment in Lightsail with the new image
   - Lightsail will perform a rolling update

## Cost Estimation

- **Nano power:** ~$7/month (512 MB RAM, 0.25 vCPU)
- **Small power:** ~$15/month (1 GB RAM, 0.5 vCPU)
- **Medium power:** ~$30/month (2 GB RAM, 1 vCPU)

Start with Nano for testing, scale up as needed.

## Troubleshooting

### Container won't start
- Check container logs in Lightsail Console
- Verify your Docker image builds correctly locally
- Ensure nginx.conf is properly formatted

### 404 errors on routes
- Verify nginx.conf has `try_files $uri $uri/ /index.html;`
- Check that the built files are in `/usr/share/nginx/html`

### Domain not working
- Verify DNS CNAME record is correct
- Wait for DNS propagation (can take time)
- Check SSL certificate status

### Performance issues
- Increase container service power level
- Check nginx gzip compression is enabled
- Verify static asset caching is working

## Quick Reference Commands

```bash
# Build locally
docker build -t railhubpage:latest .

# Run locally
docker run -p 8080:80 railhubpage:latest

# Push to ECR
aws ecr get-login-password --region us-east-1 | docker login --username AWS --password-stdin <account-id>.dkr.ecr.us-east-1.amazonaws.com
docker tag railhubpage:latest <account-id>.dkr.ecr.us-east-1.amazonaws.com/railhubpage:latest
docker push <account-id>.dkr.ecr.us-east-1.amazonaws.com/railhubpage:latest

# Push to Docker Hub
docker tag railhubpage:latest <username>/railhubpage:latest
docker push <username>/railhubpage:latest
```

## Next Steps

1. Set up CI/CD pipeline (GitHub Actions, AWS CodePipeline, etc.)
2. Configure monitoring and alerts
3. Set up automated backups if needed
4. Configure custom error pages if desired

