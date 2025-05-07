# Continuous Deployment Pipeline for Node.js Application

This repository contains a Node.js application with automated deployment to an Azure VM using GitHub Actions and Docker.

## Project Overview

This project implements a CI/CD pipeline that:
1. Builds a Docker image for a Node.js application
2. Pushes the image to Docker Hub
3. Automatically deploys the latest image to an Azure VM

## Prerequisites

Before setting up this pipeline, you need:

- A GitHub account
- A Docker Hub account
- An Azure VM with SSH access
- Docker installed on your Azure VM

## Setup Instructions

### 1. Fork/Clone this Repository

```bash
git clone <repository-url>
cd <repository-name>
```

### 2. Configure GitHub Secrets

For the workflow to run successfully, add these secrets to your GitHub repository:

| Secret Name | Description |
|-------------|-------------|
| DOCKER_USERNAME | Your Docker Hub username |
| DOCKER_PASSWORD | Your Docker Hub password or access token |
| VM_HOST | Public IP address of your Azure VM |
| VM_USER | SSH username for your Azure VM (e.g., azureuser) |
| VM_PASSWORD | SSH password for your VM (or use SSH key alternative) |

To add secrets:
1. Go to your GitHub repository
2. Navigate to Settings > Secrets and variables > Actions
3. Click "New repository secret" and add each secret

### 3. Understanding the Workflow

The GitHub Actions workflow (`deploy-admin.yml`) will:

- Trigger when changes are pushed to the `main` branch in the `nodejs-app-main/` directory
- Build the Docker image using the Dockerfile
- Push the image to Docker Hub with the tag `<your-username>/nodejsapp:latest`
- SSH into your Azure VM
- Pull the latest Docker image
- Stop and remove any existing container with the same name
- Run a new container with the updated image

### 4. Docker Configuration

The workflow uses the Dockerfile in the root directory to build the application image. Ensure your Dockerfile is properly configured to run your Node.js application.

### 5. Azure VM Requirements

Make sure your Azure VM:
- Has Docker installed
- Has port 3000 open in its network security group
- Has sufficient permissions to pull images from Docker Hub

## Usage

Once set up, the deployment process is automatic:

1. Make changes to your application in the `nodejs-app-main/` directory
2. Commit and push to the `main` branch
3. GitHub Actions will handle the rest!

Your application will be accessible at `http://<your-vm-ip>:3000`

## Troubleshooting

If you encounter issues with the deployment:

1. Check GitHub Actions logs for error messages
2. Verify all secrets are correctly configured
3. Ensure your VM has sufficient resources to run the container
4. Confirm network access between GitHub Actions, Docker Hub, and your VM

