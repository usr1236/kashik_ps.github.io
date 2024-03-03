function smoothScroll(targetId) {
    const targetElement = document.getElementById(targetId);
    window.scrollTo({
        top: targetElement.offsetTop,
        behavior: 'smooth'
    });
}

function like(blogId) {
    var likes = parseInt(localStorage.getItem(blogId)) || 0;
    likes++;
    localStorage.setItem(blogId, likes);
    document.getElementById('likes_' + blogId).innerText = likes;
}

function addComment(blogId) {
    var commentInput = document.getElementById('comment_' + blogId);
    var comment = commentInput.value.trim();
    if (comment !== '') {
        var commentsList = document.getElementById('comments_' + blogId);
        var li = document.createElement('li');
        li.textContent = comment;
        commentsList.appendChild(li);
        commentInput.value = '';

        // Persist comments to local storage
        var savedComments = JSON.parse(localStorage.getItem(blogId + '_comments')) || [];
        savedComments.push(comment);
        localStorage.setItem(blogId + '_comments', JSON.stringify(savedComments));
    }
}

function loadFromLocalStorage(blogId) {
    var likes = parseInt(localStorage.getItem(blogId)) || 0;
    document.getElementById('likes_' + blogId).innerText = likes;

    var savedComments = JSON.parse(localStorage.getItem(blogId + '_comments')) || [];
    var commentsList = document.getElementById('comments_' + blogId);
    savedComments.forEach(function(comment) {
        var li = document.createElement('li');
        li.textContent = comment;
        commentsList.appendChild(li);
    });
}

loadFromLocalStorage('blog1');
loadFromLocalStorage('blog2');


// Event listener for theme toggle button
document.getElementById('theme-toggle-btn').addEventListener('click', toggleTheme);

// Transform for profile picture
const profilePicture = document.querySelector('#about img');
profilePicture.addEventListener('mouseover', () => {
    profilePicture.style.transform = 'scale(1.1)';
});

profilePicture.addEventListener('mouseout', () => {
    profilePicture.style.transform = 'scale(1)';
});
