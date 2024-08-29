function showSection(sectionId) {
    // Hide all sections
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.classList.add('hidden');
    });

    // Show the selected section
    const selectedSection = document.getElementById(sectionId);
    selectedSection.classList.remove('hidden');
}

// Show the "About Me" section by default when the page loads
window.onload = function() {
    showSection('about');
};

// Handle form submission
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting normally
    
    // Show success message
    document.getElementById('successMessage').classList.remove('hidden');
    
    // Clear form fields
    this.reset();
});
