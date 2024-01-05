document.addEventListener('DOMContentLoaded', function() {
    const likeButtons = document.querySelectorAll('.like-button');
    likeButtons.forEach(button => {
        button.addEventListener('click', function() {
            let likes = parseInt(this.getAttribute('data-likes')) || 0;
            likes++;
            this.setAttribute('data-likes', likes);
            this.textContent = `Like (${likes})`;
        });
    });
});

