const form = document.getElementById('form');
const email = document.getElementById('mail');
const small = document.querySelector('.alert');

form.addEventListener('submit', (e) => {
    if (email.value !== email.value.toLowerCase()) {
        small.style.visibility = 'visible';
        e.preventDefault();
    } else{
        small.style.visibility = 'hidden';
    }
})