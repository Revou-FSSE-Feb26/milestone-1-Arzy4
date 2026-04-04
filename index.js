// Skills & Tools Carousel
const stContainer = document.querySelector(".st-container2");
const stSlides = document.querySelectorAll(".st-container2 li");
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

// Autoplay
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

// Swipe Gesture
// Touch Start
stContainer.addEventListener("touchstart", (e) => {
    stStartX = e.touches[0].clientX;
});

// Touch End
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

// Project Card Carousel
const pContainer = document.querySelector(".projects-container");
const pSlides = document.querySelectorAll(".projects-container article");
const pMobile = window.matchMedia("(max-width:1200px)");

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

// Send Input Form Data to Console
const form = document.querySelector("#form");
const successMessage = document.querySelector("#success-message"); //need to add to the index.html and index.css

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

    form.reset();
});

// Navbar Fixed Top Transition
const navbar = document.getElementById("navbar-container");

window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
        navbar.classList.add("animation");
    } else {
         navbar.classList.remove("animation");
    }
});

// Dropdown Menu Toggle
const burger = document.getElementById("burger");
const menu = document.getElementById("mobile-menu");
const overlay = document.getElementById("overlay");
const links = document.querySelectorAll("#mobile-menu a");

burger.addEventListener("click", () => {
    menu.classList.toggle("active");
    overlay.classList.toggle("active");
});

// Close menu when clicking on a link
links.forEach(link => {
    link.addEventListener("click", () => {
        menu.classList.remove("active");
        overlay.classList.remove("active");
    });
});

// Close when clicking overlay
overlay.addEventListener("click", () => {
    menu.classList.remove("active");
    overlay.classList.remove("active");
});

// Parallax Effect
const hero = document.querySelector(".hero");
const isMobile = window.matchMedia("(max-width: 768px)");

window.addEventListener("scroll", () => {
    if (!isMobile.matches){
        let scrollY = window.scrollY;

        hero.style.backgroundPosition = `center ${-scrollY * 0.3}px`;
    }
});