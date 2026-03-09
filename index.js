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