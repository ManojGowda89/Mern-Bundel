### README

# mb64-mernpackcli

`mb64-mernpackcli` is a comprehensive CLI tool that helps you set up a full-fledged MERN (MongoDB, Express, React, Node.js) application with ease. This package includes both frontend and backend files, allowing you to quickly build MERN apps with an MVP structure. It comes with in-built packages for the client, a well-established Node.js backend with CORS and log handling, and in-built routing functions for the frontend.

## Features

- **Complete MERN Stack**: Includes both frontend and backend setup.
- **Backend Setup**: Node.js backend with CORS, log handling, and structured in an MVP pattern (controllers, models, utils, middlewares).
- **Frontend Setup**: React frontend with pre-configured routes using React Router.
- **Log Management**: In-built log storage and handling in `log.txt`.
- **Database Integration**: Easy integration with MongoDB using environment variables.
- **No Extra Dependencies**: Nodemon, Mongoose, and Express are pre-configured and ready to use.

## Installation

You can easily install and set up the MERN application using the following steps:

### Step 1: Install the Repository and Run the Setup Script

```bash
npx mb64-mernpackcli
```

This command will:
1. Install the repository into the specified directory (`mern-app` by default).
2. Install the dependencies for both the server and client.
3. Provide instructions for accessing the client and server.

## Usage

After the setup is complete, follow these instructions to run your application:

### To Run Both Client and Server Concurrently

```bash
cd my-mern-app/server
npm run dev
```

### To Run Only the Client

```bash
cd my-mern-app/client
npm run dev
```

### To Run Only the Server

```bash
cd my-mern-app/server
npm run server
```

## Configuration

Add your MongoDB URL and other environment variables in the `.env` file:

```env
PORT=3000
MONGO_URI=your-mongodb-uri
SECRET_KEY=your-secret-key
```

## Logging

Backend logs are stored in `log.txt` and include detailed request logs:

```log
::1 - - [21/Jun/2024:13:54:40 +0000] "GET /api HTTP/1.1" 200 39 "-" "PostmanRuntime/7.39.0"
[2024-06-21T13:58:02.515Z] [32mGET[39m [34m/api[39m [32m200[39m - 4.961 ms
::1 - - [21/Jun/2024:13:58:42 +0000] "GET /api HTTP/1.1" 200 39 "-" "PostmanRuntime/7.39.0"
```

## Accessing the Application

- **Client**: [http://localhost:5173/](http://localhost:5173/)
- **Server**: [http://localhost:3000/](http://localhost:3000/)

## File Structure

The project is organized with a main directory that includes both the client and server directories, each following an MVP structure.

### Main Directory

```
my-mern-app/
│
├── client/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── hooks/
│   │   ├── pages/
│   │   ├── App.js
│   │   ├── index.js
│   │   └── Routersfun.js
│   ├── package.json
│   └── ... (other config files)
│
├── server/
│   ├── src/
│   │   ├── controllers/
│   │   ├── models/
│   │   ├── routes/
│   │   ├── utils/
│   │   ├── middlewares/
│   │   ├── app.js
│   │   └── server.js
│   ├── .env
│   ├── package.json
│   ├── log.txt
│   └── ... (other config files)
│
└── README.md
```

### Frontend (Client) Structure

- **components/**: Reusable React components.
- **hooks/**: Custom hooks for managing state and side effects.
- **pages/**: Different pages or views of the application.
- **App.js**: Main application component.
- **index.js**: Entry point of the React application.
- **Routersfun.js**: Configuration for React Router.

### Backend (Server) Structure

- **controllers/**: Handle incoming requests and responses.
- **models/**: Define the data schema and interact with the database.
- **routes/**: Define the application endpoints.
- **utils/**: Utility functions used across the application.
- **middlewares/**: Custom middleware functions for request processing.
- **app.js**: Main application file that sets up the Express server.
- **server.js**: Entry point to start the server.

## Routing Function Example for Frontend

You can set up routes in the frontend as follows:

```javascript
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

export default function Routersfun() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      errorElement: <h1>Page not found</h1>,
    },
  ]);

  return <RouterProvider router={router} />;
}
```

## License

This project is licensed under the MIT License.

## Developed By

Manoj Gowda

- [GitHub Profile](https://github.com/ManojGowda89)
- Email: manojgowda8951@gmail.com

---

This README provides a comprehensive guide on how to use `mb64-mernpackcli` to set up and run your MERN application. Follow the instructions step-by-step to get your application up and running quickly.
