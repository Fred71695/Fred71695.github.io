function openModal(imgSrc, caption) {
    const modal = document.getElementById("modal");
    const modalImg = document.getElementById("modal-img");
    const modalCaption = document.getElementById("modal-caption");

    modal.style.display = "flex";  // Change to flex for centering
    modalImg.src = imgSrc;
    modalCaption.innerText = caption;
}

function closeModal() {
    const modal = document.getElementById("modal");
    modal.style.display = "none";
}

// Close modal on Escape key press
window.addEventListener('keydown', function(event) {
    if (event.key === "Escape") {
        closeModal();
    }
});