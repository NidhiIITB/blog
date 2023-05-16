// script.js
function fetchBlogs() {
  // Simulated blog data
  const blogs = [
    {
      title: "Blog 1",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      author: "John Doe",
      date: "2023-05-16"
    },
    {
      title: "Blog 2",
      content: "Pellentesque ac ex vitae metus commodo tempus non eu purus.",
      author: "Jane Smith",
      date: "2023-05-15"
    },
    // Add more blogs here
  ];

  // Shuffle the blog array
  const shuffledBlogs = shuffleArray(blogs);

  // Display blogs on the page
  const blogContainer = document.getElementById("blogContainer");
  blogContainer.innerHTML = "";
  shuffledBlogs.forEach(blog => {
    const blogElement = createBlogElement(blog);
    blogContainer.appendChild(blogElement);
  });
}

function shuffleArray(array) {
  // Fisher-Yates shuffle algorithm
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function createBlogElement(blog) {
  const blogElement = document.createElement("div");
  blogElement.classList.add("blog");

  const titleElement = document.createElement("h2");
  titleElement.textContent = blog.title;

  const contentElement = document.createElement("p");
  contentElement.textContent = blog.content;

  const authorElement = document.createElement("p");
  authorElement.textContent = "Author: " + blog.author;

  const dateElement = document.createElement("p");
  dateElement.textContent = "Date: " + blog.date;

  blogElement.appendChild(titleElement);
  blogElement.appendChild(contentElement);
  blogElement.appendChild(authorElement);
  blogElement.appendChild(dateElement);

  return blogElement;
}

fetchBlogs();
