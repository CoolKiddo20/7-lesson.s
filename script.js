// URL of the API endpoint
const apiUrl = 'https://jsonplaceholder.typicode.com/comments';

// Fetch comments from the API
async function fetchComments() {
    try {
        const response = await fetch(apiUrl);

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const comments = await response.json();
        return comments.slice(0, 20); // Get the first 20 comments
    } catch (error) {
        console.error('Error fetching comments:', error);
    }
}

// Display comments in the DOM
function displayComments(comments) {
    const container = document.getElementById('comments-container');
    container.innerHTML = ''; // Clear existing comments

    comments.forEach(comment => {
        const commentElement = document.createElement('div');
        commentElement.className = 'comment';
        commentElement.innerHTML = `
            <h3>${comment.name} (Email: ${comment.email})</h3>
            <p>${comment.body}</p>
        `;
        container.appendChild(commentElement);
    });
}

// Main function to fetch and display comments
async function init() {
    const comments = await fetchComments();
    if (comments) {
        displayComments(comments);
    }
}

// Run the main function when the script is loaded
init();
