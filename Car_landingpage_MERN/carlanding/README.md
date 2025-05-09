# CarLanding - MERN Stack Car Landing Page

A modern car landing page built with the MERN stack (MongoDB, Express.js, React, Node.js) featuring user authentication and a beautiful UI.

## Features

- User authentication (Register/Login)
- Responsive design
- Modern UI with Material-UI
- MongoDB database integration
- Secure password hashing
- JWT authentication

## Prerequisites

- Node.js (v14 or higher)
- MongoDB (local installation or MongoDB Atlas account)
- npm or yarn package manager

## Setup Instructions

### Backend Setup

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the backend directory with the following variables:
   ```
   PORT=5000
   MONGODB_URI=mongodb://localhost:27017/carlanding
   JWT_SECRET=your-secret-key
   ```

4. Start the backend server:
   ```bash
   npm start
   ```

### Frontend Setup

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

## Usage

1. Open your browser and navigate to `http://localhost:5173`
2. Register a new account or login with existing credentials
3. Explore the car landing page and its features

## Project Structure

```
carlanding/
├── backend/
│   ├── models/
│   │   └── User.js
│   ├── routes/
│   │   └── auth.js
│   ├── server.js
│   └── package.json
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   └── Navbar.jsx
│   │   ├── context/
│   │   │   └── AuthContext.jsx
│   │   ├── pages/
│   │   │   ├── Home.jsx
│   │   │   ├── Login.jsx
│   │   │   └── Register.jsx
│   │   └── App.jsx
│   └── package.json
└── README.md
```

## Technologies Used

- Frontend:
  - React
  - Material-UI
  - React Router
  - Axios
  - Vite

- Backend:
  - Node.js
  - Express.js
  - MongoDB
  - Mongoose
  - JWT
  - bcryptjs

## Contributing

Feel free to submit issues and enhancement requests! 