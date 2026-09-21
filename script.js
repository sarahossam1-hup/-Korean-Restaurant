// ===============================
// MENU FILTER
// ===============================

function showCategory(category, button) {

    const cards = document.querySelectorAll(".food-card");
    const buttons = document.querySelectorAll(".menu-categories button");

    cards.forEach(card => {

        if (
            category === "all" ||
            card.classList.contains(category)
        ) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }

    });

    buttons.forEach(btn => {
        btn.classList.remove("active");
    });

    if (button) {
        button.classList.add("active");
    }

}


// ===============================
// CART
// ===============================

let cartCount = 0;

const addButtons =
    document.querySelectorAll(".food-bottom button");

addButtons.forEach(button => {

    button.addEventListener("click", function() {

        cartCount++;

        button.textContent = "Added ✓";

        setTimeout(() => {

            button.textContent = "Add +";

        }, 1000);

        console.log("Items in cart:", cartCount);

    });

});


// ===============================
// RESERVATION FORM
// ===============================

const reservationForm =
    document.querySelector(".reservation-form");

if (reservationForm) {

    reservationForm.addEventListener(
        "submit",
        function(event) {

            event.preventDefault();

            alert(
                "Your reservation request has been received!"
            );

            reservationForm.reset();

        }
    );

}


// ===============================
// CONTACT FORM
// ===============================

const contactForm =
    document.querySelector(".contact-form");

if (contactForm) {

    contactForm.addEventListener(
        "submit",
        function(event) {

            event.preventDefault();

            alert(
                "Thank you! Your message has been sent."
            );

            contactForm.reset();

        }
    );

}


// ===============================
// SCROLL ANIMATION
// ===============================

const sections =
    document.querySelectorAll("section");

const observer =
    new IntersectionObserver(
        (entries) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("show");

                }

            });

        },
        {
            threshold: 0.15
        }
    );


sections.forEach(section => {

    observer.observe(section);

});