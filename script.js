// A-1 Affordable Plumbing Services FAQ JavaScript

// Accordion functionality
document.addEventListener('DOMContentLoaded', function() {
  var acc = document.getElementsByClassName("accordion");
  
  for (var i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
      this.classList.toggle("active");
      var panel = this.nextElementSibling;
      
      if (panel.style.display === "block") {
        panel.style.display = "none";
      } else {
        panel.style.display = "block";
      }
    });
  }

  // Back to top button functionality
  var backToTopButton = document.getElementById("backToTop");

  window.onscroll = function() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
      backToTopButton.style.display = "block";
    } else {
      backToTopButton.style.display = "none";
    }
  };

  backToTopButton.addEventListener("click", function() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  });

  // Smooth scrolling for category navigation
  document.querySelectorAll('.category-nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      
      window.scrollTo({
        top: targetElement.offsetTop - 20,
        behavior: 'smooth'
      });
    });
  });

  // Add animation to logo
  const logo = document.querySelector('header img');
  if (logo) {
    logo.addEventListener('mouseover', function() {
      this.style.transform = 'scale(1.05)';
    });
    
    logo.addEventListener('mouseout', function() {
      this.style.transform = 'scale(1)';
    });
  }

  // Add search functionality
  const searchInput = document.getElementById('faq-search');
  if (searchInput) {
    searchInput.addEventListener('input', function() {
      const searchTerm = this.value.toLowerCase();
      const accordions = document.getElementsByClassName('accordion');
      
      for (let i = 0; i < accordions.length; i++) {
        const accordionText = accordions[i].textContent.toLowerCase();
        const panel = accordions[i].nextElementSibling;
        const panelText = panel.textContent.toLowerCase();
        
        if (accordionText.includes(searchTerm) || panelText.includes(searchTerm)) {
          accordions[i].style.display = 'block';
          accordions[i].parentElement.style.display = 'block';
        } else {
          accordions[i].style.display = 'none';
        }
      }
      
      // Show/hide category headers based on visible accordions
      const categories = document.getElementsByClassName('category-container');
      for (let i = 0; i < categories.length; i++) {
        const accordionsInCategory = categories[i].getElementsByClassName('accordion');
        let hasVisibleAccordion = false;
        
        for (let j = 0; j < accordionsInCategory.length; j++) {
          if (accordionsInCategory[j].style.display !== 'none') {
            hasVisibleAccordion = true;
            break;
          }
        }
        
        categories[i].style.display = hasVisibleAccordion ? 'block' : 'none';
      }
      
      // Show message when no results found
      const noResultsMessage = document.getElementById('no-results');
      if (noResultsMessage) {
        let hasVisibleAccordions = false;
        for (let i = 0; i < accordions.length; i++) {
          if (accordions[i].style.display !== 'none') {
            hasVisibleAccordions = true;
            break;
          }
        }
        
        noResultsMessage.style.display = hasVisibleAccordions ? 'none' : 'block';
      }
    });
    
    // Clear search button
    const clearSearchButton = document.getElementById('clear-search');
    if (clearSearchButton) {
      clearSearchButton.addEventListener('click', function() {
        searchInput.value = '';
        
        // Reset visibility of all accordions and categories
        const accordions = document.getElementsByClassName('accordion');
        for (let i = 0; i < accordions.length; i++) {
          accordions[i].style.display = 'block';
        }
        
        const categories = document.getElementsByClassName('category-container');
        for (let i = 0; i < categories.length; i++) {
          categories[i].style.display = 'block';
        }
        
        const noResultsMessage = document.getElementById('no-results');
        if (noResultsMessage) {
          noResultsMessage.style.display = 'none';
        }
      });
    }
  }
});
