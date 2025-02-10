document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll(".section");

  function revealSections() {
      sections.forEach(section => {
          const sectionTop = section.getBoundingClientRect().top;
          if (sectionTop < window.innerHeight - 100) {
              section.classList.add("show");
          }
      });
  }

  window.addEventListener("scroll", revealSections);
  revealSections(); // Run on page load
});

document.addEventListener("DOMContentLoaded", function () {
  function scrollToSection(id) {
      document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
  }
  window.scrollToSection = scrollToSection;
});

document.getElementById("achievements").addEventListener("mousemove", function(event) {
  const section = this;
  const bounds = section.getBoundingClientRect();
  
  // Detect cursor near the borders (within 50px of edges)
  const isNearBorder = (
      event.clientX - bounds.left < 50 || 
      bounds.right - event.clientX < 50 || 
      event.clientY - bounds.top < 50 || 
      bounds.bottom - event.clientY < 50
  );

  if (isNearBorder) {
      createRipple(event, section);
  }
});

function createRipple(event, section) {
  const ripple = document.createElement("div");
  ripple.classList.add("ripple");
  
  // Position the ripple at the cursor location
  ripple.style.left = `${event.clientX - section.getBoundingClientRect().left}px`;
  ripple.style.top = `${event.clientY - section.getBoundingClientRect().top}px`;
  
  section.appendChild(ripple);

  // Remove the ripple after animation completes
  setTimeout(() => {
      ripple.remove();
  }, 1200);
}
