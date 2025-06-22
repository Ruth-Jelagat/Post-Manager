// Generates a unique ID for each post
function generateId() {
  return '_' + Math.random().toString(36).substr(2, 9);
}

// Saves the list of posts into the browser's local storage as a JSON string.
function savePosts(posts) {
  localStorage.setItem('posts', JSON.stringify(posts));
}

// Retrieves the list of posts from local storage.
function loadStoredPosts() {
  const data = localStorage.getItem('posts');
  return data ? JSON.parse(data) : [];
}

// Collects user input for title, content, and optional image
function addPost() {
  const title = document.getElementById('title').value.trim();
  const content = document.getElementById('content').value.trim();
  const image = document.getElementById('image').value.trim();

  if (!title || !content) {
    alert('Title and content required!');
    return;
  }

  const posts = loadStoredPosts();
  posts.push({ id: generateId(), title, content, image }); 
  savePosts(posts);

  document.getElementById('title').value = '';
  document.getElementById('content').value = '';
  document.getElementById('image').value = '';
  loadPosts();
}

//Loads all saved posts.
function loadPosts() {
  const posts = loadStoredPosts();
  const container = document.getElementById('posts');
  container.innerHTML = '';

  posts.forEach(post => {
    const div = document.createElement('div');
    div.className = 'post';

    const titleEl = document.createElement('h3');
    titleEl.textContent = post.title;
    div.appendChild(titleEl);

    const contentEl = document.createElement('p');
    contentEl.textContent = post.content;
    div.appendChild(contentEl);

    if (post.image) {
      const img = document.createElement('img');
      img.src = post.image;
      div.appendChild(img);
    }

    // Adds 'Delete' and 'Edit' buttons to each post.
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.onclick = () => deletePost(post.id);
    div.appendChild(deleteBtn);

    const editBtn = document.createElement('button');
    editBtn.textContent = 'Edit';
    editBtn.className = 'edit-btn';
    editBtn.onclick = () => editPost(post.id);
    div.appendChild(editBtn);

    container.appendChild(div);
  });
}

// Removes the post with the given ID from the list, saves the updated list, and refreshes the display.
function deletePost(id) {
  const posts = loadStoredPosts().filter(post => post.id !== id);
  savePosts(posts);
  loadPosts();
}

// Displays input fields for the selected post to allow editing.
function editPost(id) {
  const posts = loadStoredPosts();
  const post = posts.find(p => p.id === id);
  const container = document.getElementById('posts');
  container.innerHTML = '';

  posts.forEach(p => {
    const div = document.createElement('div');
    div.className = 'post';

    
    if (p.id === id) {
      const titleInput = document.createElement('input');
      titleInput.value = post.title;
      div.appendChild(titleInput);

      const contentInput = document.createElement('textarea');
      contentInput.value = post.content;
      div.appendChild(contentInput);

      const imageInput = document.createElement('input');
      imageInput.value = post.image;
      div.appendChild(imageInput);

      // button to save changes
      const saveBtn = document.createElement('button');
      saveBtn.textContent = 'Save';
      saveBtn.className = 'save-btn';
      saveBtn.onclick = () => {
        post.title = titleInput.value.trim();
        post.content = contentInput.value.trim();
        post.image = imageInput.value.trim();
        savePosts(posts);
        loadPosts();
      };
      div.appendChild(saveBtn);
    } else {
      // For all other posts, display them as usual (non-edit mode)
      const titleEl = document.createElement('h3');
      titleEl.textContent = p.title;
      div.appendChild(titleEl);

      const contentEl = document.createElement('p');
      contentEl.textContent = p.content;
      div.appendChild(contentEl);

      if (p.image) {
        const img = document.createElement('img');
        img.src = p.image;
        div.appendChild(img);
      }

      const deleteBtn = document.createElement('button');
      deleteBtn.textContent = 'Delete';
      deleteBtn.onclick = () => deletePost(p.id);
      div.appendChild(deleteBtn);

      const editBtn = document.createElement('button');
      editBtn.textContent = 'Edit';
      editBtn.className = 'edit-btn';
      editBtn.onclick = () => editPost(p.id);
      div.appendChild(editBtn);
    }

// Append the post (edited or not) to the container
    container.appendChild(div);
  });
}