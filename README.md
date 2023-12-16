
# Redis Demo Project

This is a simple Redis demo project showcasing the integration of Redis caching in a full-stack application with a React UI and a Node.js backend. The backend fetches user data from MongoDB, and Redis is used to cache the data, resulting in significantly improved performance.

## Prerequisites

Before running the project, ensure that you have the following installed:

- [Node.js](https://nodejs.org/) (npm comes with Node.js)
- [Redis](https://redis.io/download)
- [MongoDB](https://www.mongodb.com/try/download/community)

## Setup

1. Clone the repository:

    ```bash
    git clone https://github.com/your-username/redis-demo.git
    ```

2. Change into the project directory:

    ```bash
    cd redis-demo
    ```

3. Install dependencies:

    ```bash
    npm install
    ```

## Running the Project

### Start Redis Server

Ensure that the Redis server is running. Open a terminal and run the following command:

```bash
redis-server
```

### Backend Setup

1. Open another terminal and navigate to the backend folder:

    ```bash
    cd backend
    ```

2. Install backend dependencies:

    ```bash
    npm install
    ```

3. Start the backend server:

    ```bash
    npm start
    ```

The Node.js server will run on `http://localhost:3001`.

### Frontend Setup

1. In a new terminal, navigate to the frontend folder:

    ```bash
    cd frontend
    ```

2. Install frontend dependencies:

    ```bash
    npm install
    ```

3. Start the React development server:

    ```bash
    npm start
    ```

The React app will be accessible at `http://localhost:3000`.

## Using Redis

To view Redis keys and values, you can use the `redis-cli` tool. Open a new terminal and run:

```bash
redis-cli
```

Example: To get the "users" key, use the following command in the `redis-cli`:

```bash
GET users
```

This project demonstrates a substantial improvement in performance by caching user data in Redis. Enjoy exploring the Redis demo!
```

Copy and paste this markdown code into your README.md file.
