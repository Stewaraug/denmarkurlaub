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

const correctPassword = "FaxeKondi";

const passwordInput = document.querySelector("#password-input");
const passwordButton = document.querySelector("#password-button");
const passwordScreen = document.querySelector(".password-screen");
const passwordError = document.querySelector("#password-error");


// PASSWORD WITH ENTER

passwordInput.addEventListener("keydown", (event) => {

    if (event.key === "Enter") {
        checkPassword();
    }

});


// PASSWORD CHECK

function checkPassword() {

    if (passwordInput.value.trim() === correctPassword) {

        passwordScreen.classList.add("hidden");

    } else {

        passwordError.textContent =
            "Wird mir stinken... Du hast es tatsächlich geschafft, das falsch zu beantworten. 💀";

        helpSection.style.display = "block";

    }

}


// PASSWORD BUTTON

passwordButton.addEventListener("click", () => {

    checkPassword();

});

// HELP GAME

const helpSection = document.querySelector("#help-section");

const helpQuestion = document.querySelector("#help-question");

const helpYes = document.querySelector("#help-yes");

const helpNo = document.querySelector("#help-no");
const finalClue = document.querySelector("#final-clue");

let helpStep = 0;



// HELP - YES

helpYes.addEventListener("click", () => {

    helpStep++;

    if (helpStep === 1) {

        helpQuestion.textContent =
            "Bist du dir sicher, dass du Hilfe brauchst?";

    }

    else if (helpStep === 2) {

        helpQuestion.textContent =
            "Du scheinst doch eigentlich ein fähiger Erwachsener zu sein...";

    }

    else if (helpStep === 3) {

        helpQuestion.textContent =
            "Zumindest laut deiner Kamera. 🤨";

    }

    else if (helpStep === 4) {

        helpQuestion.textContent =
            "Alright... sicher, dass du Hilfe willst?";

    }

    else if (helpStep === 5) {

        helpQuestion.textContent =
            "Na gut. Hier. Du hast es dir verdient. 🥤";

    }

    else if (helpStep === 6) {

    helpQuestion.textContent =
        "Na gut. Hier. Du hast es dir verdient. 🥤";

    finalClue.style.display = "block";

    helpYes.style.display = "none";
    helpNo.style.display = "none";

}


    // SWITCH BUTTON POSITIONS

    const parent = helpYes.parentNode;

    if (helpStep % 2 === 1) {

        parent.insertBefore(helpNo, helpYes);

    } else {

        parent.insertBefore(helpYes, helpNo);

    }

});


// HELP - NO

helpNo.addEventListener("click", () => {

    if (helpStep === 0) {

        helpQuestion.textContent =
            "Okay. Dann rate halt weiter. Viel Glück. 🙄";

    }

    else {

        helpQuestion.textContent =
            "Du hast doch gerade um Hilfe gebeten... 🤨";

    }

});

// NFC / URL PASSWORD

const urlParams = new URLSearchParams(window.location.search);

const urlPassword = urlParams.get("password");

if (urlPassword === correctPassword) {

    passwordScreen.classList.add("hidden");

}


// QUIZ SOUNDS

const correctSound = new Audio("./sounds/correct.mp3");

const wrongSound = new Audio("./sounds/wrong.mp3");

const quizzes = document.querySelectorAll(".quiz");


quizzes.forEach(quiz => {

    const quizAnswers = quiz.querySelectorAll(".quiz-answers button");

    const correctAnswer = quiz.dataset.correct;

    const quizResult = quiz.querySelector(".quiz-result");


    quizAnswers.forEach(answer => {

        answer.addEventListener("click", () => {

            // Remove previous result classes

            quizAnswers.forEach(button => {

                button.classList.remove("correct", "wrong");

            });


            if (answer.dataset.answer === correctAnswer) {

                // CORRECT

                answer.classList.add("correct");

                correctSound.currentTime = 0;

                correctSound.play();

                quizResult.textContent = "Richtig! 😎";

                quizResult.classList.remove("wrong-message");


            } else {

                // WRONG

                answer.classList.add("wrong");

                wrongSound.currentTime = 0;

                wrongSound.play();

                quizResult.textContent =
                    "Wird mir stinken... Du hast es tatsächlich geschafft, das falsch zu beantworten. 💀";

                quizResult.classList.add("wrong-message");


                // Send them to Be Judged

                setTimeout(() => {

                    document.querySelector("#be-judged").scrollIntoView({
                        behavior: "smooth"
                    });

                }, 1000);

            }

        });

    });

});
