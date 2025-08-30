# VideoHub Backend API

**Live Project Link**: [VideoHub Frontend](https://videohub-official.netlify.app/)

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Setup Instructions](#setup-instructions)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)
- [License](#license)

## Introduction

This repository contains the backend API for VideoHub, a comprehensive video-sharing platform. The API is built using Node.js and Express.js, designed to handle all server-side logic, including user authentication, video management, comments, likes, subscriptions, and more. It interacts with MongoDB for data persistence and leverages Cloudinary for efficient media storage.



## Features

-   **User Management**: Secure user registration, login, logout, and profile management.
-   **Authentication & Authorization**: JWT-based authentication for secure API access.
-   **Video Upload & Streaming**: Robust video upload functionality with Cloudinary integration and streaming capabilities.
-   **Comment System**: Users can comment on videos, and manage their comments.
-   **Like/Dislike Functionality**: Support for liking and disliking videos and comments.
-   **Subscription Model**: Users can subscribe to channels and manage their subscriptions.
-   **Dashboard & Analytics**: Provides insights into user activities and video performance.
-   **Playlist Management**: Create and manage video playlists.

## Technologies Used

-   **Backend**: Node.js, Express.js
-   **Database**: MongoDB (Mongoose ODM)
-   **Cloud Storage**: Cloudinary (for video and image assets)
-   **File Uploads**: Multer
-   **Authentication**: JSON Web Tokens (JWT), bcrypt
-   **CORS**: `cors` package
-   **Environment Variables**: `dotenv`
-   **Utilities**: `ApiResponse`, `AppError`, `asyncHandler` for consistent response and error handling.

## Project Structure

```
Backend of VideoHub/
├── .gitignore
├── .prettierignore
├── .prettierrc.json
├── README.md
├── package-lock.json
├── package.json
├── public/
│   └── temp/
├── src/
│   ├── app.js                 # Main Express application setup
│   ├── constants.js           # Global constants
│   ├── controllers/           # Business logic for API endpoints
│   │   ├── comment.controller.js
│   │   ├── dashboard.controller.js
│   │   ├── like.controller.js
│   │   ├── playlist.controller.js
│   │   ├── posts.controller.js
│   │   ├── subscription.controller.js
│   │   ├── user.controller.js
│   │   └── video.controller.js
│   ├── db/                    # Database connection setup
│   │   └── index.js
│   ├── index.js               # Application entry point
│   ├── middlewares/           # Express middleware (auth, multer)
│   │   ├── auth.middleware.js
│   │   └── multer.middleware.js
│   ├── models/                # Mongoose schemas and models
│   │   ├── Subscription.model.js
│   │   ├── comment.model.js
│   │   ├── like.model.js
│   │   ├── playlist.model.js
│   │   ├── posts.model.js
│   │   ├── user.model.js
│   │   └── video.model.js
│   ├── routes/                # API routes definitions
│   │   ├── comment.routes.js
│   │   ├── dashboard.routes.js
│   │   ├── getlikecount.routes.js
│   │   ├── like.routes.js
│   │   ├── playlist.routes.js
│   │   ├── posts.routes.js
│   │   ├── subscribercount.routes.js
│   │   ├── subscription.routes.js
│   │   ├── user.routes.js
│   │   └── video.routes.js
│   └── utils/                 # Utility functions (API response, error handling, cloudinary)
│       ├── ApiResponse.js
│       ├── AppError.js
│       ├── asyncHandler.js
│       ├── cloudinary.js
│       └── cloudinaryvideo.js
```

## Setup Instructions

Follow these steps to get the development environment running:

1.  **Clone the repository:**
    ```bash
    git clone <repository_url>
    cd "Backend of VideoHub"
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Environment Variables:**
    Create a `.env` file in the root directory of the project and populate it with your configuration. A `.env.example` file might be provided for reference.

    ```env
    PORT=8000
    MONGODB_URI="mongodb://localhost:27017/videohub"
    CORS_ORIGIN="http://localhost:3000"
    ACCESS_TOKEN_SECRET="#supersecretaccesstokenkey1234567890!@#$%^&*()"
    REFRESH_TOKEN_SECRET="#supersecretrefreshtokenkey1234567890!@#$%^&*()"
    ACCESS_TOKEN_EXPIRY="1h"
    REFRESH_TOKEN_EXPIRY="7d"
    CLOUDINARY_CLOUD_NAME="your_cloudinary_cloud_name"
    CLOUDINARY_API_KEY="your_cloudinary_api_key"
    CLOUDINARY_API_SECRET="your_cloudinary_api_secret"
    ```
    **Note**: Replace placeholder values with your actual credentials and desired settings.

4.  **Run the application:**
    ```bash
    npm run dev
    ```
    The API server will start and be accessible at `http://localhost:8000` (or your specified PORT).

## API Endpoints

Below is a summary of the main API endpoints. For detailed request/response schemas, please refer to the source code in the `src/routes` and `src/controllers` directories.

### User Endpoints (`/api/v1/users`)

-   `POST /register`: Register a new user.
-   `POST /login`: Log in a user and receive authentication tokens.
-   `POST /logout`: Log out the current user.
-   `POST /refresh-token`: Refresh access token using refresh token.
-   `GET /current-user`: Get details of the currently logged-in user.
-   `PATCH /change-password`: Change user password.
-   `PATCH /update-account`: Update user account details.
-   `PATCH /avatar`: Update user avatar.
-   `PATCH /cover-image`: Update user cover image.
-   `GET /c/:username`: Get channel profile by username.
-   `GET /history`: Get watch history of the current user.

### Video Endpoints (`/api/v1/videos`)

-   `POST /upload`: Upload a new video.
-   `GET /`: Get all videos (with pagination/filters).
-   `GET /:videoId`: Get details of a specific video.
-   `PATCH /:videoId`: Update video details.
-   `DELETE /:videoId`: Delete a video.
-   `PATCH /toggle/publish/:videoId`: Toggle video publish status.

### Comment Endpoints (`/api/v1/comments`)

-   `POST /:videoId`: Add a comment to a video.
-   `GET /:videoId`: Get all comments for a video.
-   `PATCH /c/:commentId`: Update a comment.
-   `DELETE /c/:commentId`: Delete a comment.

### Like Endpoints (`/api/v1/likes`)

-   `POST /toggle/video/:videoId`: Toggle like on a video.
-   `POST /toggle/comment/:commentId`: Toggle like on a comment.
-   `POST /toggle/tweet/:tweetId`: Toggle like on a tweet (if applicable).
-   `GET /videos`: Get all liked videos by the current user.

### Subscription Endpoints (`/api/v1/subscriptions`)

-   `POST /c/:channelId`: Toggle subscription to a channel.
-   `GET /c/:channelId`: Get subscriber count for a channel.
-   `GET /u/:subscriberId`: Get channels subscribed by a user.

### Playlist Endpoints (`/api/v1/playlists`)

-   `POST /`: Create a new playlist.
-   `GET /user/:userId`: Get playlists created by a user.
-   `GET /:playlistId`: Get details of a specific playlist.
-   `PATCH /:playlistId`: Update playlist details.
-   `DELETE /:playlistId`: Delete a playlist.
-   `PATCH /add/:videoId/:playlistId`: Add a video to a playlist.
-   `PATCH /remove/:videoId/:playlistId`: Remove a video from a playlist.

### Dashboard Endpoints (`/api/v1/dashboard`)

-   `GET /stats`: Get channel stats (total views, subscribers, videos).
-   `GET /videos`: Get all channel videos.

## Contributing

Contributions are welcome! Please follow these steps:

1.  Fork the repository.
2.  Create a new branch (`git checkout -b feature/your-feature-name`).
3.  Make your changes.
4.  Commit your changes (`git commit -m 'feat: Add new feature'`).
5.  Push to the branch (`git push origin feature/your-feature-name`).
6.  Create a Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details (if applicable).