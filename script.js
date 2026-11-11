
console.log("Website loaded successfully!");

document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function() {
        console.log("Navigation clicked:", this.textContent);
    });
});
