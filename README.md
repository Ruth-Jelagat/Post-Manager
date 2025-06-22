# 📝 Post-Manager

I created the **Mini Post Board** as a simple web app to practice DOM manipulation, handling user events, and implementing basic CRUD operations using a RESTful API powered by **JSON Server**.

Users can add, edit, and delete posts — each containing a title and content. All posts are stored on a mock backend (JSON Server), making this project perfect for practicing frontend-backend communication.


## Prerequisites

Before running this project, ensure you have the following installed:

* [Node.js & npm](https://nodejs.org/en)
* JSON Server (installed globally)
* Live Server (for serving the frontend)


## Setup Instructions

1. **Clone this repository:**

```bash
git clone https://github.com/Ruth-Jelagat/Post-Manager.git
cd Post-Manager
```

2. **Install JSON Server globally (if not installed):**

```bash
npm install -g json-server@0.17.4
```

3. **Install Live Server globally (if not installed):**

```bash
npm install -g live-server
```

4. **Start the mock backend (JSON Server):**

```bash
json-server db.json
```

✅ The API will be available at:

```
http://localhost:3000/posts
```

5. **Start the frontend using Live Server:**

```bash
live-server
```

✔️ Alternatively, open `index.html` manually in your browser.

---

## Technology Stack

* **HTML5**
* **CSS3**
* **Vanilla JavaScript (ES6)**
* **JSON Server** (for simulating RESTful API)

---

## API Endpoints Used

| Endpoint            | Description                  |
| ------------------- | ---------------------------- |
| GET `/posts`        | Fetch all blog posts         |
| GET `/posts/:id`    | Fetch a single blog post     |
| POST `/posts`       | Create a new blog post       |
| PATCH `/posts/:id`  | Update an existing blog post |
| DELETE `/posts/:id` | Delete a blog post           |

---

## Repository Structure

```
Post-Manager/
│
├── index.html         # Main HTML page
├── css/
│   └── styles.css     # Styling for the app
├── src/
│   └── index.js       # JavaScript logic (API calls, DOM updates)
└── db.json            # Mock database for JSON Server
```

---

## Features

* **View Posts:** Fetch and render all posts on page load.

* **Add Post:** Use the form to create a new blog post (via POST request).

* **Edit Post:** Update title or content of a post using a PATCH request via prompt.

* **Delete Post:** Remove a post (via DELETE request).

* **Real-Time DOM Updates:** All changes are instantly reflected in the browser.

---

## Future Improvements

* Implement image upload feature.
* Add form validation and error handling.
* Improve user interface design.
* Replace browser prompts with a custom edit form or modal.

---

## Acknowledgements

* [JSON Server](https://github.com/typicode/json-server)
* [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)



## Notes

* This project **uses a mock RESTful API** (JSON Server) — **not Local Storage**.
* The "optional image" feature is **planned but not yet implemented**.





