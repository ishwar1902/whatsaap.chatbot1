function showTime() {
	document.getElementById('currentTime').innerHTML = new Date().toUTCString();
}
showTime();
setInterval(function () {
	showTime();
}, 1000);
document.addEventListener('DOMContentLoaded', function() {
    
    // --- 1. Scroll-reveal animation for cards ---
    const cards = document.querySelectorAll('.card');
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    cards.forEach(card => observer.observe(card));

    // --- 2. Image Modal Functionality ---
    
    // Get modal elements
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("modalImage");
    const captionText = document.getElementById("caption");
    const closeBtn = document.querySelector(".close-btn");

    // Get all gallery images
    const galleryImages = document.querySelectorAll(".gallery-image");

    // Loop through all gallery images and add a click event
    galleryImages.forEach(img => {
        img.onclick = function() {
            modal.style.display = "flex"; // Use flex to re-enable centering
            modalImg.src = this.src;
            captionText.innerHTML = this.alt; // Use alt text for the caption
        }
    });

    // Function to close the modal
    function closeModal() {
        modal.style.display = "none";
    }

    // Add click event to the close button
    closeBtn.onclick = closeModal;

    // Add click event to the modal background to close it
    modal.onclick = function(event) {
        // Close if the user clicks on the background (the modal itself)
        // and not on the image or the caption
        if (event.target === modal) {
            closeModal();
        }
    }
});