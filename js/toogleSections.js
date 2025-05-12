
function showSection(sectionId) { // Hide all image sections
    document.getElementById('about-section').style.display = "none";
    document.getElementById('index-section').style.display = "none";

    // Show the selected section
    document.getElementById(sectionId).style.display = "block";


} function activateButton(button) { // Remove 'active-btn' class from all buttons
    var buttons = document.querySelectorAll('button');
    buttons.forEach(function (btn) {
        btn.classList.remove('active-btn');
    });

    // Add 'active-btn' class to the clicked button
    button.classList.add('active-btn');
}

// Add event listeners for the buttons
document.getElementById("showIndex").addEventListener("click", function () {
    showSection("index-section");
    activateButton(this);
});
document.getElementById("showAbout").addEventListener("click", function () {
    showSection("about-section");
    activateButton(this);
});

function initImageSlider(wrapperClass, interval = 3000) {
    let currentIndex = 0;
    const wrapper = document.querySelector(`.${wrapperClass}`);
    if (!wrapper) return;

    const images = wrapper.querySelectorAll('img');
    const totalImages = images.length;

    function slideImages() {
        currentIndex = (currentIndex + 1) % totalImages;
        const offset = -currentIndex * (100 / totalImages);
        wrapper.style.transform = `translateX(${offset}%)`;
    }

    setInterval(slideImages, interval);
}

// Initialize sliders
initImageSlider('image-wrapper', 2850);     // Slider 1
initImageSlider('image-wrapper2', 2900);    // Slider 2
initImageSlider('image-wrapper3', 2850);    // Slider 3
initImageSlider('image-wrapper4', 2900); // Slider 4 with custom interval
initImageSlider('image-wrapper5', 2950);    // Slider 5
