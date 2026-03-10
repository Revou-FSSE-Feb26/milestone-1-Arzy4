// skill & tools slider
const stContainer = document.querySelector(".st-container2");
const stSlides = document.querySelectorAll(".st-container2 > div");
const stMobile = window.matchMedia("(max-width:768px)");

let stIndex = 0;
let stStartX = 0;
let stEndX = 0;
let stAutoplay;

function showSkillSlide(i){
    stContainer.style.transform = `translateX(-${i * 100}%)`;
}

function nextSkillSlide(){
    stIndex++;
    if(stIndex >= stSlides.length){
        stIndex = 0;
    }
    showSkillSlide(stIndex);
}

// autoplay
function checkSkillSlider(){
    clearInterval(stAutoplay);

    if(stMobile.matches){
        stAutoplay = setInterval(nextSkillSlide,3000);
    } else {
        stContainer.style.transform = "translateX(0)";
        stIndex = 0;
    }
}

checkSkillSlider();
stMobile.addEventListener("change", checkSkillSlider);

// swipe gesture
stContainer.addEventListener("touchstart", (e) => {
    stStartX = e.touches[0].clientX;
});

stContainer.addEventListener("touchend", (e) => {
    stEndX = e.changedTouches[0].clientX;

    if(stStartX - stEndX > 50){
        stIndex++;
    } else if (stEndX - stStartX > 50){
        stIndex--;
    }

    if(stIndex >= stSlides.length) stIndex = 0;
    if(stIndex < 0) stIndex = stSlides.length - 1;

    showSkillSlide(stIndex);

    clearInterval(stAutoplay);
    stAutoplay = setInterval(nextSkillSlide,3000);
});

// project card slider
const pContainer = document.querySelector(".projects-container");
const pSlides = document.querySelectorAll(".projects-container article");
const pMobile = window.matchMedia("(max-width:1024px)");

let pIndex = 0;
let pStartX = 0;
let pEndX = 0;
let pAutoplay;

function showSlide(i){
    pContainer.style.transform = `translateX(-${i * 100}%)`;
}

function nextSlide(){
    console.log("Autoplay running");
    pIndex++;
    if(pIndex >= pSlides.length){
        pIndex = 0;
    }
    showSlide(pIndex);
}

// Autoplay
function checkSlider(){
    clearInterval(pAutoplay);

    if(pMobile.matches){
        pAutoplay = setInterval(nextSlide,3000);
    } else {
        pContainer.style.transform = "translateX(0)";
        pIndex = 0;
    }
}
checkSlider();
pMobile.addEventListener("change", checkSlider);

// swipe gesture
// touch start 
pContainer.addEventListener("touchstart", (e) => {
    pStartX = e.touches[0].clientX;
});

// touch end
pContainer.addEventListener("touchend", (e) => {
    pEndX = e.changedTouches[0].clientX;

    if(pStartX - pEndX > 50){
    pIndex++;
    } else if (pEndX - pStartX > 50){
        pIndex--;
    }

    if(pIndex >= pSlides.length) pIndex = 0;
    if(pIndex < 0) pIndex = pSlides.length - 1;

    showSlide(pIndex);

    clearInterval(pAutoplay);
    pAutoplay = setInterval(nextSlide, 3000);
});

// send input form data to console
const form = document.querySelector("#form");
const successMessage = document.querySelector("#success-message");

form.addEventListener("submit", function(e){
    e.preventDefault();

    const firstName = document.querySelector("#firstName").value;
    const lastName = document.querySelector("#lastName").value;
    const email = document.querySelector("#email").value;
    const message = document.querySelector("#message").value;

    console.log("First Name:", firstName);
    console.log("Last Name:", lastName);
    console.log("Email:", email);
    console.log("Message:", message);

    successMessage.classList.add("show");

    setTimeout(function(){
        successMessage.classList.remove("show");
    }, 3000);

    form.reset();
});