# Compile and package Spring app
FROM maven as builder
WORKDIR /app
COPY pom.xml .
RUN mvn dependency:go-offline
COPY src/ ./src/
RUN mvn package -DskipTests

# Run packaged Spring app
FROM openjdk:18 as runner
COPY --from=builder /app/target/crm-0.0.1-SNAPSHOT.jar crm-server.jar
ENTRYPOINT ["java", "-jar", "crm-server.jar"]