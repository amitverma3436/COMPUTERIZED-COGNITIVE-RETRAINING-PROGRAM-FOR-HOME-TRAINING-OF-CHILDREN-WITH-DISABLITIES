document.addEventListener('DOMContentLoaded', function() {
    const features = document.querySelectorAll('.feature');

    features.forEach(feature => {
        feature.addEventListener('click', function() {
            alert(`You clicked on ${this.querySelector('h3').textContent}`);
        });
    });
});
