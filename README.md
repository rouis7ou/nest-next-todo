# To-Do List

A simple To-Do list application built with **NestJS** for the backend and **Next.js** for the frontend. This project demonstrates full-stack development practices, including RESTful API design and modern React-based user interfaces.

## Features

- **Backend**: Provides a RESTful API using NestJS.
- **Frontend**: User interface built with Next.js for managing To-Do items.
- **CRUD Operations**: Create, Read, Update, and Delete tasks.
- **Filtering**: Filter tasks by their completion status.

## Technologies Used

- **Backend**: [NestJS](https://nestjs.com/)
- **Frontend**: [Next.js](https://nextjs.org/)
- **Database**: [PostgresSQL](https://www.postgresql.org/)

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v20 )
- [npm](https://www.npmjs.com/) or [Yarn](https://classic.yarnpkg.com/)

### Installation

1. **Clone the repository:**

    ```
    git clone https://github.com/rouis7ou/nest-next-todo.git
    ```

2. **Navigate to the project directory:**

    ```bash
    cd nest-next-todo
    ```

3. **Install backend dependencies:**

    ```bash
    cd todo-list-nest
    npm install
    ```

4. **Install frontend dependencies:**

    ```bash
    cd ../todo-list-next
    npm install
    ```

### Running the Application

1. **Start the backend server:**

    ```bash
    cd todo-list-nest
    npm run start:dev 
    ```

2. **Start the frontend development server:**

    ```bash
    cd ../todo-list-next
    npm run dev
    ```

3. **Open your browser and visit** (http://localhost:4000) to see the application in action.

## Usage

- **Add a new To-Do item**: Type your task into the input field and press Enter.
- **Mark a To-Do as completed**: Check the checkbox next to the task.
- **Edit a To-Do item**: Click on the task name to modify it.
- **Delete a To-Do item**: Click the delete button next to the task.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request to improve this project.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgements

- Thanks to the creators of [NestJS](https://nestjs.com/) and [Next.js](https://nextjs.org/) for their fantastic frameworks.
