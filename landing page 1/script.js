// Select all sections and nav links
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav");

// Create an Intersection Observer
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      const id = entry.target.getAttribute("id");

      if (entry.isIntersecting && entry.intersectionRatio >= 0.3) {
        // Remove active from all nav links
        navLinks.forEach((link) => link.classList.remove("active"));

        // Add active to the matching nav link
        const activeLink = document.querySelector(`.nav[href="#${id}"]`);
        if (activeLink) {
          activeLink.classList.add("active");
        }

        // Add active to the section itself
        sections.forEach((sec) => sec.classList.remove("active"));
        entry.target.classList.add("active");
      }
    });
  },
  {
    threshold: [0.6], // Trigger when 60% of section is visible
  }
);

// Observe each section
sections.forEach((section) => {
  observer.observe(section);
});