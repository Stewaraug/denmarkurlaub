const lightbox = document.querySelector(".lightbox");

const lightboxImage = document.querySelector(".lightbox-image");

const closeButton = document.querySelector(".close-button");

const previousButton = document.querySelector(".previous-button");

const nextButton = document.querySelector(".next-button");

const photos = document.querySelectorAll(".main-photo, .pic-ture");

let currentPhoto = 0;


photos.forEach(photo => {

    photo.addEventListener("click", () => {

        currentPhoto = Array.from(photos).indexOf(photo);

        lightboxImage.src = photo.src;

        lightbox.style.display = "flex";

    });

});


lightbox.addEventListener("click", (event) => {

    if (event.target === lightbox) {
        lightbox.style.display = "none";
    }

});


closeButton.addEventListener("click", () => {

    lightbox.style.display = "none";

});
nextButton.addEventListener("click", () => {

    currentPhoto = currentPhoto + 1;

    if (currentPhoto >= photos.length) {
        currentPhoto = 0;
    }

    lightboxImage.src = photos[currentPhoto].src;

});
previousButton.addEventListener("click", () => {

    currentPhoto = currentPhoto - 1;

    if (currentPhoto < 0) {
        currentPhoto = photos.length - 1;
    }

    lightboxImage.src = photos[currentPhoto].src;

});
let touchStartX = 0;
lightbox.addEventListener("touchstart", (event) => {

    touchStartX = event.touches[0].clientX;

});
lightbox.addEventListener("touchend", (event) => {

    const touchEndX = event.changedTouches[0].clientX;

    const swipeDistance = touchEndX - touchStartX;

    if (swipeDistance > 50) {

        previousButton.click();

    }

    if (swipeDistance < -50) {

        nextButton.click();

    }

});
const correctPassword = "FaxeKondii";

const passwordInput = document.querySelector("#password-input");
const passwordButton = document.querySelector("#password-button");
const passwordScreen = document.querySelector(".password-screen");
const passwordError = document.querySelector("#password-error");
passwordInput.addEventListener("keydown", (event) => {

    if (event.key === "Enter") {
        passwordButton.click();
    }

});
passwordButton.addEventListener("click", () => {

    if (passwordInput.value === correctPassword) {

        passwordScreen.classList.add("hidden");

    } else {

        passwordError.textContent = "Würde mir stinkend peinlich sein, wenn du das Passwort nicht weißt. Versuch's nochmal!";

    }

});
