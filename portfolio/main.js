function showSection(id) {
    document.querySelectorAll('section').forEach(section => {
        if (section.id !== id) {
            section.classList.add('hidden');
        } else {
            section.classList.remove('hidden');
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('contactForm').addEventListener('submit', function(e) {
        e.preventDefault();
        document.getElementById('successMessage').classList.remove('hidden');
    });
});