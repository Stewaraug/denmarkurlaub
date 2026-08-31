const lightbox = document.querySelector(".lightbox");

const lightboxImage = document.querySelector(".lightbox-image");

const closeButton = document.querySelector(".close-button");

const previousButton = document.querySelector(".previous-button");

const nextButton = document.querySelector(".next-button");

const photos = document.querySelectorAll(".main-photo, .pic-ture");

let currentPhoto = 0;


// OPEN PHOTO

photos.forEach(photo => {

    photo.addEventListener("click", () => {

        currentPhoto = Array.from(photos).indexOf(photo);

        lightboxImage.src = photo.src;

        lightbox.style.display = "flex";

    });

});


// CLOSE WHEN CLICKING OUTSIDE PHOTO

lightbox.addEventListener("click", (event) => {

    if (event.target === lightbox) {
        lightbox.style.display = "none";
    }

});


// CLOSE BUTTON

closeButton.addEventListener("click", () => {

    lightbox.style.display = "none";

});


// CHANGE PHOTO

function changePhoto(direction) {

    currentPhoto = currentPhoto + direction;

    if (currentPhoto >= photos.length) {
        currentPhoto = 0;
    }

    if (currentPhoto < 0) {
        currentPhoto = photos.length - 1;
    }

    lightboxImage.classList.remove("slide-right", "slide-left");

    void lightboxImage.offsetWidth;

    if (direction === 1) {
        lightboxImage.classList.add("slide-right");
    } else {
        lightboxImage.classList.add("slide-left");
    }

    lightboxImage.src = photos[currentPhoto].src;

}


// NEXT BUTTON

nextButton.addEventListener("click", () => {

    changePhoto(1);

});


// PREVIOUS BUTTON

previousButton.addEventListener("click", () => {

    changePhoto(-1);

});


// SWIPING

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


// PASSWORD

const correctPassword = "FaxeKondii";

const passwordInput = document.querySelector("#password-input");

const passwordButton = document.querySelector("#password-button");

const passwordScreen = document.querySelector(".password-screen");

const passwordError = document.querySelector("#password-error");


// PASSWORD WITH ENTER

passwordInput.addEventListener("keydown", (event) => {

    if (event.key === "Enter") {

        passwordButton.click();

    }

});


// PASSWORD BUTTON

passwordButton.addEventListener("click", () => {

    if (passwordInput.value === correctPassword) {

        passwordScreen.classList.add("hidden");

    } else {

        passwordError.textContent =
            "Würde mir stinkend peinlich sein, wenn du das Passwort nicht weißt. Versuch's nochmal!";

    }

});
const correctSound = new Audio("sounds/correct.mp3");
const wrongSound = new Audio("sounds/wrong.mp3");

const quizzes = document.querySelectorAll(".quiz");

quizzes.forEach(quiz => {

    const quizAnswers = quiz.querySelectorAll(".quiz-answers button");

    const correctAnswer = quiz.dataset.correct;

    quizAnswers.forEach(answer => {

        answer.addEventListener("click", () => {

            if (answer.dataset.answer === correctAnswer) {

                answer.classList.add("correct");

                correctSound.currentTime = 0;
                correctSound.play();

            } else {

                answer.classList.add("wrong");

                wrongSound.currentTime = 0;
                wrongSound.play();

            }

        });

    });

});
