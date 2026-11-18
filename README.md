Project on creating a custom Docker image using Github workflow
Also used Multistage Docker container method to perform build on one container with backend dependencies and pass the build to clean new container to lower the image size to ensure reliability and redundancy in pulling and spinning it up in the cluster .
