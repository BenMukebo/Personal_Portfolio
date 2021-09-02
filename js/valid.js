const form = document.getElementById('form');
const email = document.getElementById('mail');
const alertParent = document.querySelector('.btn-submit-alert');
const small = document.createElement('small');
alertParent.appendChild(small);
small.innerText = 'Please enter a valid email address.';
small.style.backgroundColor = '#fff';
small.style.color = '#e74c3c';
small.style.padding = '12px';
small.style.visibility = 'hidden';

form.addEventListener('submit', (e) => {
  if (email.value !== email.value.toLowerCase()) {
    small.style.visibility = 'visible';
    setTimeout(() => {
      small.style.visibility = 'hidden';
      email.style.border = '1px solid #d0d9d4';
    }, 8000);
    email.style.border = '1px solid #e74c3c';
    e.preventDefault();
  } else {
    small.style.visibility = 'hidden';
    email.style.border = '1px solid #d0d9d4';
  }
});
