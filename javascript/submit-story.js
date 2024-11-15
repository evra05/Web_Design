document.getElementById('story-form').addEventListener('submit', function(event) {
    event.preventDefault();
    document.getElementById('story-status').innerHTML = "Story Submitted Successfully!";
});

// Function to toggle the mobile navbar visibility
function toggleNavbar() {
    const navbarLinks = document.getElementById("navbarLinks");
    navbarLinks.classList.toggle("active");
}

