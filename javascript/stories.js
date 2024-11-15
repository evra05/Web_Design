// Toggle visibility of the comment section
function toggleCommentSection(button) {
    const commentSection = button.closest('.story-actions').nextElementSibling;
    commentSection.classList.toggle('hidden');
}

// Add a new comment and update the comment count
function addComment(button) {
    const commentSection = button.closest('.comment-section');
    const commentList = commentSection.querySelector('.comment-list');
    const input = commentSection.querySelector('input[type="text"]');
    const commentText = input.value.trim();

    if (commentText) {
        // Create new comment element
        const newComment = document.createElement('div');
        newComment.classList.add('comment-item');
        newComment.innerHTML = `
            <p class="comment-text">${commentText}</p>
            <small class="comment-timestamp">${new Date().toLocaleString()}</small>
        `;
        
        // Append new comment to the list
        commentList.appendChild(newComment);
        
        // Clear the input
        input.value = '';

        // Update comment count based on actual comments in the list
        updateCommentCount(commentSection);
    }
}

// Function to update the displayed comment count
function updateCommentCount(commentSection) {
    const commentCount = commentSection.querySelectorAll('.comment-item').length;
    const commentButton = commentSection.previousElementSibling.querySelector('.comment-count');
    commentButton.textContent = commentCount;
}

document.addEventListener('DOMContentLoaded', function() {
    const bookmarkIcon = document.querySelector('.bookmark-icon');
    
    bookmarkIcon.addEventListener('click', function() {
        bookmarkIcon.classList.toggle('active');
    });
});
