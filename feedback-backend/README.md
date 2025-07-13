# Feedback API 📝

Welcome to the **Feedback API** — a simple Node.js backend built as a learning project to explore how real backend systems work using Express and MongoDB.

This project is part of my journey to understand full-stack web development from scratch. It focuses on building a clean, functional REST API that handles user feedback and connects to a MongoDB database.

---

## 🎯 Purpose

This is a **learning project** — not a production-ready app. Its goal is to help me (and others) understand:

- How to build backend services using Node.js and Express
- How to connect to a local MongoDB database using Mongoose
- How to create REST API routes (GET, POST, PUT, DELETE)
- How to send requests with Postman
- How to organize backend code and test endpoints

---

## 🔧 Technologies Used

- **Node.js**
- **Express.js**
- **MongoDB** (local)
- **Mongoose** ODM
- **Postman** (API testing)
- **Git** and **GitHub**

---

## 📦 Features

- `GET /feedback` — Get all feedback entries
- `POST /feedback` — Submit new feedback
- `PUT /feedback/:id` — Update existing feedback (coming soon)
- `DELETE /feedback/:id` — Delete a feedback entry (coming soon)

---

## 🚀 Getting Started

### Prerequisites

- Node.js and npm installed
- MongoDB installed and running locally (`mongod`)
- Git installed

### Clone & Run Locally

```bash
git clone https://github.com/dahami9925/feedback-api.git
cd feedback-api
npm install
node server.js