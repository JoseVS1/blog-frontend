# ObsidianPost Frontend (User View)

A React-based frontend application for viewing and interacting with the ObsidianPost blog platform.

## Overview

This frontend application, built with React and Vite, serves as the primary interface for general users of the ObsidianPost blog. It allows users to browse published blog posts, view individual post details, sign up for an account, log in, and manage their own comments (create, edit, delete). It communicates with the ObsidianPost Backend API to fetch data and perform actions.

## Features

-   User Authentication: Signup and Login pages/forms.
-   Post Viewing: Displays a list of published posts on the homepage.
-   Single Post Display: Shows the full content of a selected post.
-   Commenting System: Allows logged-in users to add comments to posts.
-   Comment Management: Enables users to edit and delete their own comments.
-   Protected Routes: Restricts access to certain features (like commenting) to logged-in users.
-   Responsive Design: Adapts to different screen sizes.
-   Rich Content Display: Renders HTML content stored in posts using `html-react-parser`.

## Technology Stack

-   Frontend: React, Vite
-   Routing: `react-router-dom`
-   State Management: React Context API (`UserContext`), `useState`, `useEffect`
-   Styling: CSS
-   API Interaction: Native `fetch` API
-   Utilities: `jwt-decode` (for reading token data), `date-fns` (for date formatting), `html-react-parser` (for rendering post content)

## Installation

1.  Clone the repository:
    ```bash
    git clone https://github.com/JoseVS1/blog-frontend.git
    cd blog-frontend
    ```

2.  Install dependencies:
    ```bash
    npm install
    ```

3.  Ensure the ObsidianPost Backend API server is running (typically on `http://localhost:3000`).

4.  Start the development server:
    ```bash
    npm run dev
    ```
    *(This command is standard for Vite projects)*

## Project Structure

```
./
├── src
│   ├── components
│   │   ├── Comment.jsx
│   │   ├── CommentForm.jsx
│   │   ├── Comments.jsx
│   │   ├── Errors.jsx
│   │   ├── Navbar.jsx
│   │   └── ProtectedRoute.jsx
│   ├── context
│   │   └── UserContext.js
│   ├── pages
│   │   ├── Home.jsx
│   │   ├── Login.jsx
│   │   ├── NoMatch.jsx
│   │   ├── Post.jsx
│   │   └── Signup.jsx
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── eslint.config.js
├── index.html
└── vite.config.js
```

## Usage

### Authentication
1.  Navigate to the `/signup` page to create a new account.
2.  Navigate to the `/login` page to log in with existing credentials.
3.  Use the "Log out" link in the navbar to end your session.

### Browsing & Commenting
-   The Home page (`/`) displays published posts. Click on a post title to view its full content.
-   On the post detail page (`/posts/:id`), logged-in users will see a comment form.
-   Submit the form to add a comment.
-   If a comment belongs to the logged-in user, "Edit" and "Delete" buttons will appear for that comment.

## API Endpoints

This application consumes the ObsidianPost Backend API. It does not expose its own endpoints. Key interactions include fetching posts, fetching comments, user signup/login, and comment CRUD operations via the backend API.

## Security

-   User authentication relies on JWT tokens provided by the backend.
-   Tokens are stored in the browser's `localStorage`.
-   The token is included in the `Authorization: Bearer <token>` header for requests requiring authentication.
-   The `ProtectedRoute` component prevents access to certain routes/pages if the user is not logged in.
-   Sensitive operations (like data validation and authorization) are primarily handled by the backend API.

## Contributing

1.  Fork the repository
2.  Create a feature branch (`git checkout -b feature/amazing-feature`)
3.  Commit your changes (`git commit -m 'Add some amazing feature'`)
4.  Push to the branch (`git push origin feature/amazing-feature`)
5.  Open a Pull Request

## License

[MIT License](LICENSE)

## Acknowledgements

-   [React](https://reactjs.org/)
-   [Vite](https://vitejs.dev/)
-   [React Router](https://reactrouter.com/)
-   [date-fns](https://date-fns.org/)
-   [jwt-decode](https://github.com/auth0/jwt-decode)
-   [html-react-parser](https://github.com/remarkablemark/html-react-parser)
