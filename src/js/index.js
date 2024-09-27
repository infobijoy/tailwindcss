function loadComponent(filePath, elementId) {
    fetch(filePath)
      .then(response => response.text())
      .then(data => {
        document.getElementById(elementId).innerHTML = data;
      })
      .catch(error => console.error('Error loading component:', error));
  }
  document.addEventListener("DOMContentLoaded", function() {
    loadComponent('./components/nav.html', 'nav-placeholder');
    loadComponent('./components/hero.html', 'hero-placeholder');
    loadComponent('./components/blog.html', 'blog-placeholder');
    loadComponent('./components/footer.html', 'footer-placeholder');
  });


//this code for nav searche box
(function () {
  window.addEventListener("load", () => {
      // Initialize the overlay and combobox instances
      const overlay = HSOverlay.getInstance(
          '[data-hs-overlay="#html-example-using-modal-popup-with-shortcut-call-trigger"]',
          true
      );
      const combobox = HSComboBox.getInstance(
          '#html-example-using-modal-popup-with-shortcut-call-trigger [data-hs-combo-box]',
          true
      );

      // Add click event listener to the button with id="search-box"
      const searchButton = document.getElementById("search-box");
      searchButton.addEventListener("click", function () {
          if (overlay.element && overlay.element.overlay.classList.contains('open')) return false;

          overlay.element.open();    // Open the overlay
          combobox.element.setCurrent(); // Set the combobox current state
      });
  });
})();
