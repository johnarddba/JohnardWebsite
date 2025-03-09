const form = document.getElementById('contact-form');
const formStatus = document.getElementById('form-status');

form.addEventListener('submit', handleSubmit);

async function handleSubmit(event) {
    event.preventDefault();
    
    // Show sending status
    formStatus.innerHTML = 'Sending...';
    
    try {
        const response = await fetch('https://formspree.io/f/mqapzvky', {
            method: 'POST',
            body: new FormData(event.target),
            headers: {
                'Accept': 'application/json'
            }
        });
        
        if (response.ok) {
            // Success message
            formStatus.innerHTML = 'Thanks for your message!';
            form.reset();
        } else {
            // Error message
            throw new Error('Form submission failed');
        }
    } catch (error) {
        formStatus.innerHTML = 'Oops! There was a problem submitting your form';
        console.error(error);
    }
}