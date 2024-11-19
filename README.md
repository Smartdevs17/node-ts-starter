# Node.js TypeScript Starter Project

This project serves as a starting point for building a Node.js application using TypeScript. It includes a basic HTTP server setup and environment variable management with `dotenv`.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- **Node.js**: Make sure you have Node.js installed on your machine. You can download it from [nodejs.org](https://nodejs.org/).
- **npm**: Node.js package manager, which is included with Node.js installation.

## Getting Started

Follow these steps to get the project up and running:

### 1. Clone the Repository

Clone this repository to your local machine using:

```bash
git clone <repository-url>
```

### 2. Install Dependencies

Navigate to the project directory and install the necessary dependencies:

```bash
cd <project-directory>
npm install
```

### 3. Set Up Environment Variables

Create a `.env` file in the root of your project and add the following environment variables:

```plaintext
PORT=3000
NODE_ENV=development
```

You can change the `PORT` and `NODE_ENV` values as needed.

### 4. Run the Server

Start the server using the following command:

```bash
npm start
```

The server will start on the port specified in your `.env` file (default is 3000). You should see a message in the console indicating that the server is running.

### 5. Access the Server

Open your web browser and go to `http://localhost:3000`. You should see a "Hello World" message.

## Project Structure

- **src/index.ts**: The main entry point of the server application.
- **helper.ts**: A utility module that provides helper functions.

## Future Enhancements

- Add more routes and features to the Node.js backend.
- Implement error handling and logging.
- Integrate a database for data persistence.

## Contributing

If you want to contribute to this project, please fork the repository and submit a pull request.

## License

This project is open-source and available under the [MIT License](LICENSE).