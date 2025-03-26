// DOM Manipulation (Changing Text)
document.getElementById('change-text-btn')?.addEventListener('click', function() {
    const textElement = document.getElementById('demo-text');
    textElement.textContent = "Text has been changed!";
    textElement.style.color = 'green';
    textElement.style.fontSize = '1.5rem';
});

// Load Header and Footer
function loadComponent(id, file) {
    fetch(`/myproject/components/${file}`)
        .then(response => response.text())
        .then(data => document.getElementById(id).innerHTML = data)
        .catch(error => console.error('Error loading component:', error));
}

loadComponent('header', 'header.html');
loadComponent('footer', 'footer.html');
