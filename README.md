# 📝 Todo API

A simple **CRUD** (Create, Read, Update, Delete) API built with **Node.js**, **Express**, and **MongoDB** to manage todos.

## 📌 Features

* Fetch all todos
* Create a new todo
* Update an existing todo
* Delete a todo

## 🚀 Tech Stack

* **Backend:** Node.js, Express.js
* **Database:** MongoDB (Mongoose)

## 📂 Project Structure

```
├── controllers/
│   └── todoController.js   # API logic for todos
├── models/
│   └── TodoModel.js        # Mongoose schema for todos
├── routes/
│   └── todoRoutes.js       # Todo API routes
├── server.js               # Express server entry point
└── README.md
```

## ⚡ API Endpoints

### 1️⃣ Get all todos

**GET** `/api/todos`
*Response:*

```json
{
  "success": true,
  "todos": [...]
}
```

### 2️⃣ Create a todo

**POST** `/api/todos`
*Request body:*

```json
{
  "title": "New Task"
}
```

### 3️⃣ Update a todo

**PUT** `/api/todos`
*Request body:*

```json
{
  "id": "todoId",
  "title": "Updated Task",
  "completed": true
}
```

### 4️⃣ Delete a todo

**DELETE** `/api/todos`
*Request body:*

```json
{
  "id": "todoId"
}
```




