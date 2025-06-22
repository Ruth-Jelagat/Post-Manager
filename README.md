# Post-Manager

I created the Mini Post Board as a simple web app to practice DOM manipulation, handling user events, and implementing basic CRUD operations. Users can add, edit, and delete posts, each with a title, content, and optional image. All posts are saved in Local Storage, so they remain even after refreshing the page. 

![image](https://github.com/user-attachments/assets/7767cc1e-6a82-496c-9267-fda195841f50)

# API End-points Used
| Endpoint           | Description              |
| ------------------ | ------------------------ |
| GET /posts         | Fetch all blog posts     |
| GET /posts/\:id    | Fetch a single blog post |
| POST /posts        | Create a new blog post   |
| PATCH /posts/\:id  | Update an existing post  |
| DELETE /posts/\:id | Delete a blog post       |


# Reporsitory Structure
mini-post-board/
│
├── index.html         # Main HTML page
├── css/
│   └── styles.css     # Styling for the app
├── src/
│   └── index.js       # JavaScript logic (API calls, DOM updates)
└── db.json            # Mock database for JSON Server

# Features
-View Posts: Fetch and render all posts on page load.

-Add Post: Use the form to create a new blog post (POST request).

-Edit Post: Edit title/content of a post via prompt (PATCH request).

-Delete Post: Remove a post (DELETE request).

-DOM Updates in Real-Time: Changes are instantly reflected on the page.
