# Use an OpenJDK image from Docker Hub
FROM openjdk:17-jdk-slim

# Create a volume for temporary files
VOLUME /tmp

# Add a non-root user to run the application (optional, but recommended for security)
RUN useradd -m springuser
USER springuser

# Copy the application JAR to the container
COPY target/library-management-0.0.1-SNAPSHOT.jar /app/library-management.jar

# Set the working directory
WORKDIR /app

# Set the entry point to run the JAR file
ENTRYPOINT ["java", "-jar", "library-management.jar"]

# Make port 8080 available to the world outside this container
EXPOSE 8080