Certainly! Below is a comprehensive README for the Notz application:

# Notz App

Notz is a Node.js-based web application that allows users to manage their notes conveniently. It provides features such as creating, viewing, updating, and deleting notes. The application also includes user authentication using Google OAuth2.

## Features

- User authentication with Google OAuth2
- Create, view, update, and delete notes
- Search functionality to find specific notes
- Responsive design for various screen sizes

## Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose
- Passport.js (for Google OAuth2 authentication)
- EJS (Embedded JavaScript) templates
- Bootstrap (for styling)
- HTML5
- CSS
- JavaScript

## Getting Started

To run the Notz application locally, follow these steps:

1. **Clone the Repository**: 
   - Open your terminal.
   - Navigate to the directory where you want to clone the repository.
   - Run the following command:
     ```
     git clone https://github.com/inaveed-git/Notz-Note-app---nodejs.git
     ```
  
2. **Install Node.js and npm**:
   - If you haven't already installed Node.js and npm, download and install them from [the official website](https://nodejs.org/).
   - Verify the installation by running the following commands in your terminal:
     ```
     node -v
     npm -v
     ```
   - You should see the installed Node.js and npm versions.

3. **Install Dependencies**:
   - Navigate to the project directory in your terminal.
   - Run the following command to install the project dependencies:
     ```
     npm install
     ```

4. **Create Environment Variables**:
   - Add the following environment variables to the `.env` file:
     ```plaintext
     DB_CONNECT=YOUR_MONGODB_CONNECTION_STRING 

     GOOGLE_CLIENT_ID=YOUR_GOOGLE_CLIENT_ID
     GOOGLE_CLIENT_SECRET=YOUR_GOOGLE_CLIENT_SECRET
     GOOGLE_CALLBACK_URL=http://localhost:8080/google/callback
     ```
 
## Setting up Google OAuth2 Authentication
To set up Google OAuth2 authentication, follow these steps:

1. Go to the [Google Cloud Console](https://console.cloud.google.com/).
2. Create a new project and enable the Google+ API for that project.
3. In the credentials section, create OAuth client ID credentials.
4. Specify the authorized redirect URIs (e.g., `http://localhost:8080/google/callback` for local development).
5. Once you've obtained the client ID and client secret, add them to your `.env` file as `GOOGLE_CLIENT_ID` and `GOOGLE_CLIENT_SECRET`.
6. Set the callback URL in the `.env` file as `GOOGLE_CALLBACK_URL=http://localhost:8080/google/callback`.

5. **Start the Application**:
   - Run the following command to start the application:
     ```
     npm start
     ```
   - The application will be running on `http://localhost:8080`.
   
6. **Access the Application**:
   - Open your web browser.
   - Enter `http://localhost:8080` in the address bar.
   - You should see the Notz application homepage.

## Routing Information

### Main Routes (index.js)
- `/` (GET): Renders the homepage .
- `/about` (GET): Renders the About page with information about the application.

### Dashboard Routes (Dashboard.js)
- `/dashboard` (GET): Renders the user's dashboard with a list of notes.
- `/dashboard/item/:id` (GET): Renders a specific note by ID.
- `/dashboard/item/:id` (PUT): Updates a specific note by ID.
- `/dashboard/item-delete/:id` (DELETE): Deletes a specific note by ID.
- `/dashboard/add` (GET): Renders the form to add a new note.
- `/dashboard/add` (POST): Submits the form to add a new note.
- `/dashboard/search` (GET): Renders the search page.
- `/dashboard/search` (POST): Submits the search query and renders the search results.

### Authentication Routes (auth.js)
- `/auth/google` (GET): Initiates Google OAuth2 authentication.
- `/google/callback` (GET): Handles Google OAuth2 callback.
- `/login-failure` (GET): Renders a page indicating that something went wrong during login.
- `/logout` (GET): Logs the user out and redirects to the homepage.

## Contributing

Contributions are welcome! Feel free to open issues or submit pull requests to contribute to the development of the Notz application.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

