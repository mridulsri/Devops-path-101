# Docker 101 inside
A Dockerfile is a plain text file that contains a series of instructions used to build a Docker image. Each line in a Dockerfile represents a step in the image-building process. The image created is a lightweight, portable, and self-sufficient environment containing everything needed to run an application, including libraries, dependencies, and the application code itself.

## Ref:
    - https://dev.to/prodevopsguytech/writing-a-dockerfile-beginners-to-advanced-31ie

## Key Components of a Dockerfile:
    - Base Image: 
        - The starting point for your Docker image. For example, if you're building a Python application, you might start with python:3.9 as your base image.
    - Application Code and Dependencies: 
        - The code is added to the image, and dependencies are installed to ensure the application runs correctly.
    - Commands and Configurations: Instructions to execute commands, set environment variables, and expose ports.

## Why is a Dockerfile Important:
    - Standardizes the way applications are built and deployed.
    - Ensures consistency across different environments (development, testing, production).
    - Makes applications portable and easier to manage.

## Why Dockerfiles:
    - Portability Across Environments
    - Simplified CI/CD Pipelines
    - Version Control for Infrastructure
    - Enhanced Collaboration
    - Resource Efficiency

## Dockerfile Concepts
- Building Multi-Stage Dockerfiles
    - Stage 1 (Builder): Install dependencies, compile code, and build the application.
        - Stage 2 (Production): Copy only the necessary files from the build stage.
- Using Environment Variables
    - Environment variables make Dockerfiles more flexible and reusable.
        ```
        ENV APP_ENV=production
        CMD ["node", "server.js", "--env", "$APP_ENV"]
        ```
    - Override variables at runtime using docker run -e:
        ```
        docker run -e APP_ENV=development myapp
        ```
- Adding Healthchecks
    - The HEALTHCHECK instruction defines a command to check the health of a container.
        ```
        HEALTHCHECK --interval=30s --timeout=10s --retries=3 CMD curl -f http://localhost:8080/health || exit 1

        ```
    - Purpose: Ensures that your application inside the container is running as expected.
    - Automatic Restart: If the health check fails, Docker can restart the container.

## Advanced Dockerfile Techniques
- Use Smaller Base Images
    - Replace default images with minimal ones, like alpine
        ```
        FROM python:3.9-alpine
        ```
    - Minimize Layers: Combine commands to reduce the number of layers:
        ```
        RUN apt-get update && apt-get install -y curl && apt-get clean
        ```

- Using Build Arguments
    - Build arguments (ARG) allow dynamic configuration of images during build time.
        ```
        // in Dockerfile
        ARG APP_VERSION=1.0
        RUN echo "Building version $APP_VERSION"

        // Pass the value during build:
        docker build --build-arg APP_VERSION=2.0 .
        ```
- Implementing Security Best Practices
    - Avoid Root Users: 
    - Use Trusted Base Images: 
    - Scan Images for Vulnerabilities: Use tools like Trivy or Snyk to scan your images

## Steps to debug Docker files
- Build the Image Incrementally
    - Use the --target flag to build specific stages in multi-stage Dockerfiles
        - docker build --target <builder_stage> -t debug-image .

- Inspect Intermediate Layers
    - Use docker history to view the image layers and identify unnecessary commands or issues:
        - docker history <image_id>
    
- Debugging with RUN
    - Add debugging commands to your RUN instruction
        - RUN echo "File exists:" && ls /path/to/file

- Log Files
    - See logs of container 
        - docker logs <container_id>

- Check Build Context
    - Ensure that unnecessary files aren’t being sent to the build context Use a .dockerignore file to filter files.

## Common Errors and Fixes
- Error: File Not Found:
    - Copy file path issue using `COPY` or `ADD`. Check `WORKDIR`
- Error: Dependency Not Installed:
- Permission Errors:

## Best Practices for Writing Dockerfiles
- Pin Image Versions: Avoid using latest tags for base images
- Optimize Layers: Combine commands to reduce the number of layers. Each RUN instruction creates a new layer
- Use .dockerignore Files
- Keep Images Lightweight
- Add Metadata: Use the LABEL instruction to add metadata about the image, such as version, author, and description
    ```
    LABEL maintainer="yourname@example.com"
    LABEL version="1.0"
    ```
- Use Non-Root Users : Running containers as root is a security risk. Create and switch to a non-root user:
    ```
    RUN adduser --disabled-password appuser
    USER appuser
    ```
- Clean Up Temporary Files: Remove temporary files after installation to reduce the image size:
    ```
    RUN apt-get install -y curl && rm -rf /var/lib/apt/lists/*
    ```
## Common Mistakes to Avoid
- Using Large Base Images
- Failing to Use Multi-Stage Builds
- Hardcoding Secrets
    ```
    ENV DB_PASSWORD=${DB_PASSWORD}
    ```
- Not Cleaning Up After Installation
    ```
    RUN apt-get install -y curl && rm -rf /var/lib/apt/lists/*
    ```
- Not Documenting Dockerfiles
    ```
    # Set working directory
    WORKDIR /usr/src/app
    ```