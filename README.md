# Feedback App 📝

Welcome to the **Feedback App** — a full-stack learning project that combines a simple RESTful **Node.js + Express** backend with a **React** frontend. It uses **MongoDB** for data storage and demonstrates how to build, test, and connect a backend API to a frontend client.

This project is part of my journey to understand full-stack web development from scratch.

---

## 🎯 Purpose

This is a **learning project** — not a production-ready app. Its goal is to help me (and others) understand:

- How to build backend services using Node.js and Express
- How to connect to a local MongoDB database using Mongoose
- How to create REST API routes (GET, POST, PUT, DELETE)
- How to test API endpoints using Postman
- How to build a basic frontend using React and Axios
- How to connect frontend and backend over HTTP

---

## 🔧 Technologies Used

### Backend
- **Node.js**
- **Express.js**
- **MongoDB (local)**
- **Mongoose** (ODM)
- **Postman** (API testing)
- **Git & GitHub**

### Frontend
- **React**
- **Axios**
- **Create React App**

---

## 📦 Features

### Backend API
- `GET /feedback` — Get all feedback entries
- `POST /feedback` — Submit new feedback
- `PUT /feedback/:id` — Update feedback
- `DELETE /feedback/:id` — Delete feedback

### Frontend (React)
- Displays submitted feedback
- Simple form to submit new feedback
- Live update after submission

---

## 🚀 Getting Started

### Prerequisites
- Node.js and npm
- MongoDB running locally (`mongod`)
- Git installed

---

### Clone & Run Backend

```bash
git clone https://github.com/dahami9925/feedback-api.git
cd feedback-api/feedback-backend
npm install
node server.js