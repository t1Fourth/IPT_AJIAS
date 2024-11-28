// Wait until the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function () {
    // Get all navigation links
    const navLinks = document.querySelectorAll("nav ul li a");
  
    // Add a click event listener to each link
    navLinks.forEach(link => {
      link.addEventListener("click", function (event) {
        // Remove the 'active' class from all links
        navLinks.forEach(nav => nav.classList.remove("active"));
        // Add the 'active' class to the clicked link
        this.classList.add("active");
      });
    });
  });
  