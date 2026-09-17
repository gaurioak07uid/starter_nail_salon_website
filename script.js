// ================= MOBILE MENU =================

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");
});


// Close menu after clicking a link

document.querySelectorAll("#navMenu a").forEach(link => {

    link.addEventListener("click", () => {
        navMenu.classList.remove("active");
    });

});


// ================= BOOKING FORM =================

const bookingForm = document.getElementById("bookingForm");
const formMessage = document.getElementById("formMessage");

bookingForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const service = document.getElementById("service").value;
    const date = document.getElementById("date").value;


    // Replace this number with the salon's WhatsApp number

    const whatsappNumber = "919876543210";


    const message =
        `Hi Blush Nail Studio!%0A%0A` +
        `I'd like to book an appointment.%0A%0A` +
        `Name: ${name}%0A` +
        `Phone: ${phone}%0A` +
        `Service: ${service}%0A` +
        `Preferred Date: ${date}`;


    const whatsappURL =
        `https://wa.me/${whatsappNumber}?text=${message}`;


    formMessage.textContent =
        "Opening WhatsApp to confirm your appointment...";


    window.open(whatsappURL, "_blank");

});


// ================= FAQ =================

const faqQuestions =
    document.querySelectorAll(".faq-question");


faqQuestions.forEach(question => {

    question.addEventListener("click", () => {

        const item = question.parentElement;

        item.classList.toggle("active");

        const icon = question.querySelector("span");

        icon.textContent =
            item.classList.contains("active")
                ? "−"
                : "+";

    });

});


// ================= YEAR =================

document.getElementById("year").textContent =
    new Date().getFullYear();