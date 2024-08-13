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
3. Configure MongoDB:
   Create .env file and enter your credentials
5. Start the server:
   ```bash
   npm start

The server will start on http://localhost:3000.

### API Endpoints:
Categories:
1. POST /api/categories/category: Create a new category
2. GET /api/categories/category: Retrieve all categories
3. PUT /api/categories/category: Update categories
4. GET /api/categories/category/:id : Retrieve a category by ID
5. PUT /api/categories/category/:id : Update a category by ID

Subcategories
1. POST /api/subcategories/subcategory: Create a new subcategory
2. GET /api/subcategories/subcategory: Retrieve all subcategories
3. GET /api/subcategories/subcategory/category/:categoryId : Retrieve subcategories by category ID
4. GET /api/subcategories/subcategory/:id : Retrieve a subcategory by ID
5. PUT /api/subcategories/subcategory/:id : Update a subcategory by ID

Items
1. POST /api/items/item: Create a new item
2. GET /api/items: Retrieve all items
3. GET /api/items/item/subcategory/:subCategoryId : Retrieve items by Subcategory ID
4. GET /api/items/item/category/:categoryId : Retrieve items by Category ID
5. GET /api/items/item/:id : Retrieve an item by ID
6. PUT /api/items/item/:id : Update an item by ID
7. GET /api/items/items/search/:name : Search items by name

## Loom Video
A Loom video explaining all operations will be added soon. Link to Loom Video

## GitHub Repository
The code is hosted on GitHub: [Menu Management API](https://github.com/Shreyask24/Menu-Management-API)

## Live Link
The server is hosted on Render: [Menu Management API Live](https://menu-management-api.onrender.com/)

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
