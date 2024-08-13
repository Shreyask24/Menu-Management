# Menu Management API

## Overview
This project is a Node.js backend server for managing a menu with categories, subcategories, and items. The API allows you to create, retrieve, update, and delete categories, subcategories, and items. It also supports searching items by name.

## Features
- **Category Management**: Create, retrieve, update, and delete categories.
- **Subcategory Management**: Create, retrieve, update, and delete subcategories under categories.
- **Item Management**: Create, retrieve, update, and delete items under subcategories or categories.
- **Search**: Search items by name.

## Technologies
- **Node.js**: Runtime environment for server-side JavaScript.
- **Express.js**: Web application framework for Node.js.
- **MongoDB**: NoSQL database for storing data.

## Project Setup

### Prerequisites
- Node.js (v14 or later)
- MongoDB (running locally or remotely)

### Installation

1. **Clone the Repository**
   ```bash
   git clone https://github.com/yourusername/menu-management-api.git
   cd menu-management
2.  ```bash
    npm install
3. Configure MongoDB: Update the mongoDB/connection.js file with your MongoDB connection string if you're using a remote MongoDB instance.
4. Start the server:
   ```bash
      node index

The server will start on http://localhost:3000.

API Endpoints:
Categories:
POST /api/categories: Create a new category
GET /api/categories: Retrieve all categories
GET /api/categories/
: Retrieve a category by ID
PUT /api/categories/
: Update a category by ID

Subcategories
POST /api/subcategories: Create a new subcategory
GET /api/subcategories: Retrieve all subcategories
GET /api/subcategories/category/
: Retrieve subcategories by category ID
GET /api/subcategories/
: Retrieve a subcategory by ID
PUT /api/subcategories/
: Update a subcategory by ID

Items
POST /api/items: Create a new item
GET /api/items: Retrieve all items
GET /api/items/category/
: Retrieve items by category ID
GET /api/items/subcategory/
: Retrieve items by subcategory ID
GET /api/items/
: Retrieve an item by ID
PUT /api/items/
: Update an item by ID
GET /api/items/search/
: Search items by name

Loom Video
A Loom video explaining all operations will be added soon. Link to Loom Video

GitHub Repository
The code is hosted on GitHub: [Menu Management API](https://github.com/Shreyask24/Menu-Management-API)

Answers to Assignment Questions

1. Which database you have chosen and why?
Ans: MongoDB was chosen for its flexibility, schema-less design, and ease of use with Node.js.

2. 3 things that you learned from this assignment:
Ans: Implementing CRUD operations using RESTful APIs.
Structuring a Node.js project for scalability and maintainability.
Connecting and working with MongoDB in a real-world application.

3. What was the most difficult part of the assignment?
Ans: Handling nested relationships between categories, subcategories, and items.

4. What you would have done differently given more time?
Ans: If given more time, the implementation of additional features like user authentication and more complex search functionalities. Enhance documentation and create more detailed examples for API usage.
