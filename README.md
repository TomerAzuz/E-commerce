# ElectroMarket - Cloud Native E-Commerce Application

## Table of Contents
1. [Introduction](#introduction)
    - 1.1 [Overview](#overview)
    - 1.2 [Technologies](#technologies)

2. [Architecture and Interaction](#architecture-interaction)

3. [Services](#services)
    - 3.1 [Catalog Service](#catalog-service)
        - 3.1.1 [Purpose and Functionality](#purpose-and-functionality)
        - 3.1.2 [API](#api)
        - 3.1.3 [Data Models](#data-models)
    - 3.2 [Order Service](#order-service)
        - 3.2.1 [Purpose and Functionality](#purpose-and-functionality-1)
        - 3.2.2 [API](#api-1)
        - 3.2.3 [Data Models](#data-models-1)
    - 3.3 [Edge Service](#edge-service)
        - 3.3.1 [Purpose and Functionality](#purpose-and-functionality-2)
        - 3.3.2 [API](#api-2)
        - 3.3.3 [Data Models](#data-models-2)
    - 3.4 [Payment Service](#payment-service)
        - 3.4.1 [Purpose and Functionality](#purpose-and-functionality-3)
        - 3.4.2 [API](#api-3)
        - 3.4.3 [Data Models](#data-models-3)
    - 3.5 [Mail Service](#mail-service)
        - 3.5.1 [Purpose and Functionality](#purpose-and-functionality-4)
        - 3.5.2 [API](#api-4)
        - 3.5.3 [Data Models](#data-models-4)
    - 3.6 [Config Service](#config-service)
        - 3.6.1 [Purpose and Functionality](#purpose-and-functionality-5)
4. [Build and Deployment](#build-and-deployment)
    - 4.1 [Packaging and Running as JAR](#packaging-and-running-as-jar)
    - 4.2 [Docker](#docker)
    - 4.3 [Kubernetes](#kubernetes)

<div id="introduction"></div>

# 1. Introduction
https://github.com/TomerAzuz/E-commerce/assets/134202242/61d0c613-90aa-4437-a866-a7cc8212057c

<br>


<br>
  <div style="justify-content: center; align-items: center;">
  <a href="https://i.ibb.co/DMNYMcm/homepage.png" target="_blank"><img src="https://i.ibb.co/DMNYMcm/homepage.png" alt="homepage" style="width:150px; height:150px; margin-right: 10px; "/></a>
  <a href="https://i.ibb.co/hdwRYfy/products-page.png" target="_blank"><img src="https://i.ibb.co/hdwRYfy/products-page.png" alt="Products Page" style="width:150px; height:150px; margin-right: 10px;"/></a>
  <a href="https://i.ibb.co/v4rFvwD/product-details-page.png" target="_blank"><img src="https://i.ibb.co/v4rFvwD/product-details-page.png" alt="Product Details Page" style="width:150px; height:150px; margin-right: 10px;"/></a>
  <a href="https://i.ibb.co/xJ1n4vv/cart-page.png" target="_blank"><img src="https://i.ibb.co/xJ1n4vv/cart-page.png" alt="Cart Page" style="width:150px; height:150px; margin-right: 10px;"/></a>
  <a href="https://i.ibb.co/6btsRN4/search-page.png" target="_blank"><img src="https://i.ibb.co/6btsRN4/search-page.png" alt="search-page" style="width:150px; height:150px; margin-right: 10px;"/></a>
  <a href="https://i.ibb.co/SmtQ48V/contact-page.png" target="_blank"><img src="https://i.ibb.co/SmtQ48V/contact-page.png" alt="contact-page" style="width:150px; height:150px; margin-right: 10px;"/></a>
  <a href="https://i.ibb.co/28jwh2Z/order-cancelled-page.png" target="_blank"><img src="https://i.ibb.co/28jwh2Z/order-cancelled-page.png" alt="order-cancelled-page" style="width:150px; height:150px; margin-right: 10px;"/></a>
  <a href="https://i.ibb.co/NCHNChZ/order-confirmed-page.png" target="_blank"><img src="https://i.ibb.co/NCHNChZ/order-confirmed-page.png" alt="order-confirmed-page" style="width:150px; height:150px; margin-right: 10px;"/></a>
  <a href="https://i.ibb.co/g6JytH7/admin-page.png" target="_blank"><img src="https://i.ibb.co/g6JytH7/admin-page.png" alt="admin-page" style="width:150px; height:150px; margin-right: 10px;"/></a>
  <a href="https://i.ibb.co/6r3k36z/orders-page.png" target="_blank"><img src="https://i.ibb.co/6r3k36z/orders-page.png" alt="orders-page" style="width:150px; height:150px; margin-right: 10px;"/></a>
  <a href="https://i.ibb.co/hFtfbHP/error-page.png" target="_blank"><img src="https://i.ibb.co/hFtfbHP/error-page.png" alt="error-page" style="width:150px; height:150px; margin-right: 10px;"/></a>
</div>


<div id="overview"></div>

## 1.1 Overview
ElectroMarket is an e-commerce application built on a microservices architecture using Java 17 and the Spring framework for the backend and React for the frontend. <br>
The backend implementation is based on the principles outlined in the book by Thomas Vitale, [Cloud Native Spring in Action - With Spring Boot and Kubernetes](https://www.manning.com/books/cloud-native-spring-in-action). <br>

<div id="technologies"></div>

## 1.2 Technologies
### Backend:
- **Java Framework:**
    - [Spring Framework](https://spring.io/)

- **Database Management and Migrations:**
    - [PostgreSQL](https://www.postgresql.org/): Chosen as the relational database to store and manage data for the application.
    - [Flyway](https://flywaydb.org/): Employed for database schema version control and migrations.

- **Identity and Access Management:**
    - [Keycloak](https://www.keycloak.org/): Used for identity and access management, implementing OpenID Connect and OAuth 2.1 protocols.

- **Session Management:**
    - [Redis](https://redis.io/): Used to manage web session data.

- **Event Broker:**
    - [RabbitMQ](https://www.rabbitmq.com/): Used as a message queue to enable asynchronous communication between system components.

- **Certificate Management:**
    - [Cert-manager](https://cert-manager.io/): Employed for managing SSL/TLS certificates in the system.

- **Monitoring and Visualization:**
    - [Grafana Stack](https://grafana.com/grafana/): Utilized for monitoring and visualizing system metrics and logs.

- **Testing:**
    * [JUnit5](https://junit.org/)
    * [Testcontainers](https://testcontainers.org)
    * [Mockito](https://site.mockito.org/)

### Frontend:
- **JavaScript Library:**
    - [React](https://reactjs.org/)

- **CSS Framework:**
    - [Tailwind CSS](https://tailwindcss.com/)

<div id="architecture-interaction"></div>

# 2. Architecture and Interaction
![diagram](https://i.ibb.co/1QQtz4v/architecture.png)

<div id="services"></div>

# 3. Services
<div id="catalog-service"></div>

## 3.1 Catalog Service
<div id="purpose-and-functionality"></div>

### 3.1.1 Purpose and Functionality
Provides functionality to manage products in the catalog.
<div id="api"></div>

### 3.1.2 API

**Base Endpoint:** `/v1/products`

| #   | Endpoint                        | Description                                      | Parameters                                                                                                    | Example                                        |
| --- | ------------------------------- | ------------------------------------------------ | ------------------------------------------------------------------------------------------------------------- | ---------------------------------------------- |
| 1   | `GET /`                         | Retrieve all products in the catalog.           | - `page` (optional)<br/>- `size` (optional)<br/>- `sort` (optional)                                          | `GET /?page=1&size=20&sort=price,desc`        |
| 2   | `GET /{id}`                     | Retrieve details of a specific product.         | - `id` (required)                                                                                            | `GET /123`                                    |
| 3   | `GET /category/{id}`            | Retrieve products for a given category ID.                  | - `id` (required)<br/>- `page` (optional)<br/>- `size` (optional)<br/>- `sort` (optional)                    | `GET /category/456?page=2&size=15&sort=date,asc` |
| 4   | `POST /`                        | Add a new product to the catalog.               | - Request body: Product Model                                                                    | `POST / {"name": "New Product", "price": 19.99, "category": "Electronics"}`                     |
| 5   | `DELETE /{id}`                  | Remove a product by ID.                         | - `id` (required)                                                                                            | `DELETE /789`                                 |
| 6   | `PUT /{id}`                     | Update details of a specific product.           | - `id` (required)<br/>- Request body: Product Model                                               | `PUT /123 {"name": "New Product", "price": 19.99, "category": "Electronics"}`             |
| 7   | `GET /search/{query}`           | Search for products based on a query.           | - `query` (required)<br/>- `page` (optional)<br/>- `size` (optional)<br/>- `sort` (optional)               | `GET /search/laptop?page=1&size=5&sort=price,desc` |

**Base Endpoint:** `/v1/category`

| #   | Endpoint                        | Description                                      | Parameters                                                                                                    | Example                                        |
| --- | ------------------------------- | ------------------------------------------------ | ------------------------------------------------------------------------------------------------------------- | ---------------------------------------------- |
| 1   | `GET /`              | Retrieve all categories in the catalog.         | None                                                                                                          | `GET /`                             |
| 2   | `GET /{id}`         | Retrieve details of a specific category.       | - `id` (required)                                                                                            | `GET /123`                        |
| 3   | `POST /`             | Add a new category to the catalog.             | - Request body: Category Model                                                                     | `POST / {"name": "Laptops", "imageUrl": "https://example.com/laptop.jpg"}`                |
| 4   | `PUT /{id}`         | Update details of a specific category.         | - `id` (required) <br> - Request Body: Category Model                                              | `PUT /456 {"name": "New Category", "imageUrl": "https://example.com/product-image.jpg"}`       |
| 5   | `DELETE /{id}`      | Remove a category by ID.                       | - `id` (required)                                                                                            | `DELETE /789`                      |

<div id="data-models"></div>

### 3.1.3 Data Models
**Product Model:**
```json
{
  "name": "Product Name",
  "price": 99.99,
  "categoryId": 1,
  "stock": 21,
  "imageUrl": "https://example.com/product-image.jpg",
  "brand": "Example Brand"
}
```

**Category Model:**
```json
{
  "name": "Category Name",
  "imageUrl": "https://example.com/category-image.jpg"
}
```
<div id="order-service"></div>

## 3.2 Order Service
<div id="purpose-and-functionality-1"></div>

### 3.2.1 Purpose and Functionality
Provides functionality to manage orders.
<div id="#api-1"></div>

### 3.2.2 API
**Base Endpoint:** `/v1/orders`
| #   | Endpoint                        | Description                                      | Parameters                                                                                                    | Example                                        |
| --- | ------------------------------- | ------------------------------------------------ | ------------------------------------------------------------------------------------------------------------- | ---------------------------------------------- |
| 1   | `GET /`                | Retrieve all orders for the authenticated user. | - Uses OAuth 2.1 authentication (`Jwt` token)<br/> | `GET /`                              |
| 2   | `GET /{id}`           | Retrieve details of a specific order.           | - `id` (required)                                                                                            | `GET /123`                          |
| 3   | `POST /`               | Submit a new order request.                             | Request Body: List of Order items                                                                | `POST / { "items": [{"productId": 1, "quantity": 2}, {"productId": 2, "quantity": 1}] }` |
| 4   | `GET /{id}/items`     | Retrieve the items associated with a specific order.            | - `id` (required)                                                                                            | `GET /456/items`                    |

**Error Handling:** In case of errors, the API returns appropriate HTTP status codes and error messages in the response body.
<div id="data-models-1"></div>

### 3.2.3 Data Models:

#### Order Model:
```json
{
  "id": 123,
  "createdBy": "tomer123",
  "totalPrice": 250.00,
  "status": "PAYMENT_COMPLETED"
}
```

#### Order Item Model
```json
{
  "orderId": 456,
  "productId": 789,
  "quantity": 2
}
```

**Note:** The authentication is handled using OAuth 2.1, and the user's subject from the `Jwt` token is used to retrieve orders for the authenticated user.
<div id="edge-service"></div>

## 3.3 Edge Service
<div id="purpose-and-functionality-2"></div>

### 3.3.1 Purpose and Functionality
Provides an API gateway and cross-cutting concerns such as security, monitoring, and resilience.
<div id="api-2"></div>

### 3.3.2 API
**Base Endpoint:** `/v1/user`

| #   | Endpoint              | Description                                             | Parameters                                      | Example             |
| --- | --------------------- | ------------------------------------------------------- | ----------------------------------------------- | ------------------- |
| 1   | `GET /`               | Retrieve details about the authenticated user.          | - None (Uses OAuth 2.1 authentication)           | `GET /`             |

<div id="data-models-2"></div>

### 3.3.3 Data Models
#### User Model:
```json
{
  "username": "tomer123",
  "firstname": "Tomer",
  "lastName": "Azuz",
  "email": "user@example.com",
  "roles": ["customer", "employee"]
}
```
<div id="payment-service"></div>

## 3.4 Payment Service
<div id="purpose-and-functionality-3"></div>

### 3.4.1 Purpose and Functionality
Integrates with PayPal to provide payment functionality.
<div id="api-3"></div>

### 3.4.2 API
| #   | Endpoint                        | Description                                      | Parameters                                                                                                    | Example                                        |
| --- | ------------------------------- | ------------------------------------------------ | ------------------------------------------------------------------------------------------------------------- | ---------------------------------------------- |
| 1   | `POST /createPayment`                | Sends a payment request to PayPal payment gateway. | - Request body: Payment Request Messsage<br/> | `POST /crearePayment  {"orderId": 1, "total": 9.99}`                     |
| 2   | `POST /capturePayment`           | A webhook for completing the payment.           | - Request body: payment token                                                                                          | `POST /capturePayment, token`                          |
<div id="data-models-3"></div>

### 3.4.3 Data Models
#### Payment Request:
```json
{
  "orderId": 123,
  "total": 10.0
}
```
<div id="mail-service"></div>

## 3.5 Mail Service
<div id="purpose-and-functionality-4"></div>

### 3.5.1 Purpose and Functionality
Integrates with Zoho Mail to provide email functionalities, including sending and receiving messages.
<div id="api-4"></div>

### 3.5.2 API
| #   | Endpoint                        | Description                                      | Parameters                                                                                                    | Example                                        |
| --- | ------------------------------- | ------------------------------------------------ | ------------------------------------------------------------------------------------------------------------- | ---------------------------------------------- |
| 1   | `POST /sendMail`                | Sends an email with the specified content. | - Request body: Email Details <br/> | `POST /sendMail  {"recipient": "user@example.com", "subject": "Greeting", "message": "Hi there!", "attachment": null}`                     |
| 2   | `POST /sendMailWithAttachment`           | Sends an email with the specified content.           | - Request Body: Email Details                                                                                        | `POST /sendMailWithAttachment  {"recipient": "user@example.com", "subject": "Greeting", "message": "Hi there!", "attachment": "path-to-file"}`                         |
| 3   | `POST /contact`           | Process and sends a contact form request.           | - Request Body: Contact form request                                                                                         | `POST /contact  {"name": "Tomer", "email": "user@example.com", "subject": "Greeting", "message": "Hi there!"}`                         |
<div id="data-models-4"></div>

### 3.5.3 Data Models
#### Email Details:
```json
{
  "recipient": "user@example.com",
  "subject": "Greeting",
  "message": "Hi there!",
  "attachment": "path-to-file"
}
```
#### Contact form:
```json
{
  "name": "Tomer",
  "email": "user@example.com",
  "subject": "Greeting",
  "message": "Hi there!"
}
```
<div id="config-service"></div>

## 3.6 Config Service
<div id="purpose-and-functionality-5"></div>

### 3.6.1 Purpose and Functionality
Provides centralized configuration.
<div id="build-and-deployment"></div>

# 4. Build and Deployment
<div id="packaging-and-running-as-jar"></div>

## 4.1 Packaging and Running as JAR
To package and run the application as a JAR using Gradle, execute the following command:
```bash
$ ./gradlew bootRun
```
<div id="docker"></div>

## 4.2 Docker
Follow these steps to build and run the Docker images:
1. Clone the repository.
2. Navigate to the project directory.
3. Package the application as a container image:
```bash
$ ./gradlew bootBuildImage
```
4. Execute the following command to start the application:
```bash
$ docker-compose up -d <image-name>
```
<div id="kubernetes"></div>

## 4.3 Kubernetes
Follow these steps to deploy the application locally using [minikube](https://minikube.sigs.k8s.io/) and [Tilt](https://tilt.dev/):
1. Clone the repository.
2. Navigate to the `deployment/platform/development` directory.
3. Run the following command to start minikube and deploy the backing services:
```bash
$ ./create-cluster.sh
```
4. For Windows or macOS, run the following command to expose the cluster to the local environment:
```bash 
$ minikube tunnel --profile <profile-name> 
```
5. Navigate to the `deployment/applications/development` directory.
6. Run the following command to deploy the applications:
```bash
$ tilt up
```
