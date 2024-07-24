# Library Inventory

This is a simple web application for managing a library's book inventory. Users can add, view, update, and delete books from the inventory.

## Technologies Used

|      | Technologies                   |
|--------------|--------------------------------|
| Front-End    | HTML, CSS, JavaScript          |
| Back-End     | Java, Spring Boot, Hibernate   |
| Database     | MySQL                          |
| Deployment   | Docker                         |

## Prerequisites
- JDK 17 or higher
- Docker and Docker Compose

## Setup and Running the Application

### Step 1: Clone the Repository
```bash
git clone <your-private-repo-url>
cd library-inventory
````
### Step 2: Build the Project
```bash
mvn clean package -DskipTests
````
### Step 3: Run the Application with Docker
```bash
docker-compose up --build
````
### Step 4: Access the Application
Open your web browser and navigate to `http://localhost:8080`.

## API Endpoints
- `GET /api/books` - Retrieve a list of all books.
- `GET /api/books/{id}` - Retrieve details of a specific book by ID.
- `POST /api/books` - Add a new book.
- `PUT /api/books/{id}` - Update an existing book by ID.
- `DELETE /api/books/{id}` - Delete a book by ID.

## Usage Instructions
### Add a New Book
- Fill in the book details in the form and click the "Save" button.

### Edit a Book
- Click the "Edit" button next to the book you want to edit. This will populate the form with the book's details.
- Update the book details as needed and click "Save".

### Delete a Book
- Click the "Delete" button next to the book you want to delete.