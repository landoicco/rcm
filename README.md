## CRM App

### App made with Spring and React

This app was made for learning purposes. The idea is to create a full-stack application using Spring and React.

The idea is to keep the code minimal and clean, while also provide full details of the job made by each file, as well as their dependencies.

## How this works

### `client` (React)

### `src` (Spring)

#### `Contact.java`

This file is the model that describes the object we will be storing in our database.

- The `@Data` annotation comes from Lombok. It takes care of generate getters for all members inside the class. Also provides a constructor and implementations for other methods like `equals(), toString(), hashCode()`, etc.

- The `@Entity` annotation comes from `jakarta.persistence`.
  In Spring Java, an entity is a Java class that represents a table in a relational database, and each instance of the class corresponds to a row in that table.

- The `@Id` and `@GeneratedValue` annotations come from jakarta.persistence. The `@Id` is used to specify the primary key of an entity.
  `@GeneratedValue` provides for the specification of generation strategies for the values of primary keys. Meaning that in this case, this annotation will help to generate automatically all new primary keys.

#### `ContactRepository.java`

This file represents the repository for the Contact entity.
In Spring Data, a repository is an abstraction layer that simplifies data access and manipulation for a specific domain model or entity. It provides a uniform interface for CRUD (Create, Read, Update, Delete) operations and other data-related functionality, such as querying and pagination.

- The `CrudRepository` interface comes from Spring Data Commons project. This file is the one that allows us to operate with the database.

- The `@RepositoryRestResource` is a Spring Data REST annotation that enables the automatic exposure of a Spring Data JPA repository as a RESTful web service.

A Restful Web Service is a web service that conforms to the principles of the Representational State Transfer (REST) architectural style. REST is a lightweight, flexible, and scalable approach to designing networked applications. In a RESTful web service, resources are identified by URIs (Uniform Resource Identifiers), and clients interact with these resources using a fixed set of operations (HTTP methods) such as GET, POST, PUT, and DELETE.

#### `ContactsController.java`

### Spring

#### General

- JPA = Java Persistance API
  `CrudRepository` extends `Repository` interface
- The `CommandLineRunner` interface in Spring Boot is used to indicate that a bean should run when it is contained within a `SpringApplication`. This interface provides a convenient way to execute some code just after the Spring Boot application has started.

#### Annotations

- The `@Autowired` annotation in Spring is used for automatic dependency injection. It enables Spring to inject dependencies into a bean (Java class) without explicit configuration. This annotation is part of the Spring Framework’s Inversion of Control (IoC) container.
- The `@Component` annotation in Spring is a stereotype annotation that indicates a class belongs to the application’s configuration and can be managed by the Spring IoC (Inversion of Control) container. It’s a generic annotation that can be used as an alternative to other stereotype annotations like `@Service`, `@Controller`, and `@Repository`.

### Java
