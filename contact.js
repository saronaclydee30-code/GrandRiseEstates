document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        const nameInput = form.querySelector('input[type="text"]');
        const name = nameInput ? nameInput.value : 'Inquirer';

        alert('Thank you, ' + name + '! Your message has been sent to GrandRise Estates and we will be in touch shortly.');
        
        form.reset();
    });
});