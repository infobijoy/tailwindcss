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
  