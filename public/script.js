// Testimony bar functionality
let testimonyIndex = 0;
showTestimonies();

function showTestimonies() {
    let i;
    let testimonies = document.getElementsByClassName("testimony");
    for (i = 0; i < testimonies.length; i++) {
        testimonies[i].style.display = "none";
    }
    testimonyIndex++;
    if (testimonyIndex > testimonies.length) {
        testimonyIndex = 1;
    }
    testimonies[testimonyIndex - 1].style.display = "block";
    setTimeout(showTestimonies, 5000); // Change testimony every 5 seconds
}

// Slideshow functionality
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("slide");
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}

// Contact form functionality
document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Thank you for contacting us!");
});

// Calendar functionality (sample events data)
const events = [
    { date: '2024-08-20', detail: 'Youth Conference' },
    { date: '2024-07-13-17', detail: 'Women\'s Meeting' },
    { date: '2024-08-01', detail: 'General Assembly' }
];

function displayEvents() {
    const eventList = document.getElementById("calendar-events").querySelector("ul");
    eventList.innerHTML = '';
    events.forEach(event => {
        const listItem = document.createElement("li");
        listItem.textContent = `${event.date}: ${event.detail}`;
        eventList.appendChild(listItem);
    });
}

displayEvents();

