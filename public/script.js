// Slideshow functionality
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("demo");
    let captionText = document.getElementById("caption");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    if (dots.length > 0) {
        dots[slideIndex - 1].className += " active";
        captionText.innerHTML = dots[slideIndex - 1].alt;
    }
}

// Modal functionality
function openModal() {
    document.getElementById("myModal").style.display = "block";
}

function closeModal() {
    document.getElementById("myModal").style.display = "none";
}

// Testimony bar functionality
let testimonyIndex = 0;
showTestimony();

function showTestimony() {
    let i;
    let testimonies = document.getElementsByClassName("testimony");
    for (i = 0; i < testimonies.length; i++) {
        testimonies[i].style.display = "none";
    }
    testimonyIndex++;
    if (testimonyIndex > testimonies.length) { testimonyIndex = 1 }
    testimonies[testimonyIndex - 1].style.display = "block";
    setTimeout(showTestimony, 3000); // Change testimony every 3 seconds
}

// Contact form functionality
document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Thank you for contacting us!");
});

// Calendar functionality (sample events data)
const events = [
    { date: '2024-07-20', detail: 'Youth Conference' },
    { date: '2024-07-25', detail: 'Women\'s Meeting' },
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

// Search functionality
function searchSite() {
    let input = document.getElementById('search').value.toLowerCase();
    let sections = document.getElementsByTagName('section');
    for (let i = 0; i < sections.length; i++) {
        if (sections[i].innerText.toLowerCase().includes(input)) {
            sections[i].style.display = '';
        } else {
            sections[i].style.display = 'none';
        }
    }
}

