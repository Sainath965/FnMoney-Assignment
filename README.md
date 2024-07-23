# FnMoney-Assignment

# Landing Page and Backend API

## Project Overview

This project consists of a landing page with user registration, login, and contact form functionalities. The backend is implemented using Node.js with Express.js and MongoDB for data storage. The frontend is developed using React.

## Features

- **Landing Page**: Home, About, Assessment Tasks, and Contact sections.
- **User Registration**: Allows users to register with a username, email, and password.
- **User Login**: Users can log in with their username and password.
- **Contact Form**: Users can send a message via the contact form.
- **Task Management**: CRUD operations for managing assessment tasks.
- **Secure Authentication**: User authentication with JWT and password hashing.

## Installation

### Backend

1. **Clone the repository**:

   ```bash
   git clone <repository-url>
   cd backend
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Set up environment variables**:
   
   Create a `.env` file in the root directory with the following content:

   ```env
   PORT=3000
   MONGODB_URI=mongodb://localhost:27017/assessmentDB
   SECRET=mysecret
   ```

4. **Start the backend server**:

   ```bash
   node app.js
   ```

### Frontend

1. **Navigate to the frontend directory**:

   ```bash
   cd frontend
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Start the React development server**:

   ```bash
   npm start
   ```

## API Endpoints

### User Endpoints

- **Register**: `POST /api/users/register`
  - Request body: `{ "username": "string", "email": "string", "password": "string" }`
  - Response: User object

- **Login**: `POST /api/users/login`
  - Request body: `{ "username": "string", "password": "string" }`
  - Response: `{ "token": "string" }`

### Task Endpoints

- **Create Task**: `POST /api/tasks`
  - Request body: `{ "title": "string", "description": "string", "completed": "boolean" }`
  - Response: Task object

- **Get All Tasks**: `GET /api/tasks`
  - Response: Array of task objects

- **Get Task by ID**: `GET /api/tasks/:id`
  - Response: Task object

- **Update Task**: `PUT /api/tasks/:id`
  - Request body: `{ "title": "string", "description": "string", "completed": "boolean" }`
  - Response: Updated task object

- **Delete Task**: `DELETE /api/tasks/:id`
  - Response: Status 204 (No Content)

### Contact Endpoints

- **Submit Contact Form**: `POST /api/contacts`
  - Request body: `{ "name": "string", "email": "string", "message": "string" }`
  - Response: Contact object

## Frontend Usage

The frontend provides forms for user registration, login, and contact. Ensure the backend server is running at `http://localhost:3000` to interact with the API endpoints.

## Technologies Used

- **Frontend**: React
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: JWT, bcrypt
- **Validation**: express-validator

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contributing

Feel free to submit issues or pull requests. Contributions are welcome!
