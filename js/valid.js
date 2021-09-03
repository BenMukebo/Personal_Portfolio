const form = document.getElementById('form');
const email = document.getElementById('mail');
const alertParent = document.querySelector('.btn-submit-alert');
const alertMsg = document.createElement('p');
alertParent.appendChild(alertMsg);
alertMsg.innerText = 'Please enter a valid email address.';
alertMsg.style.backgroundColor = '#fff';
alertMsg.style.color = '#36b37e';
alertMsg.style.fontWeight = '600';
alertMsg.style.textShadow = '1px 1px 5px #36b37e';
alertMsg.style.padding = '12px';
alertMsg.style.visibility = 'hidden';

form.addEventListener('submit', (e) => {
  if (email.value !== email.value.toLowerCase()) {
    alertMsg.style.visibility = 'visible';
    email.style.border = ' 2px solid rgba(1, 155, 86, 0.945)';
    email.style.boxShadow = '1px 1px 10px rgb(7 176 100 / 73%)';

    setTimeout(() => {
      alertMsg.style.visibility = 'hidden';
      email.style.border = '1px solid #d0d9d4';
      email.style.boxShadow = 'none';
    }, 8000);
    e.preventDefault();
  } else {
    alertMsg.style.visibility = 'hidden';
    email.style.border = '1px solid #d0d9d4';
  }
});

const userName = document.getElementById('name');
const userMsg = document.getElementById('msg');

function readAndPrefill() {
  const string = localStorage.getItem('dataStorage');
  if (string) {
    const storedObj = JSON.parse(string);
    email.value = storedObj.enterName;
    userName.value = storedObj.enterEmail;
    userMsg.value = storedObj.enterMessage;
    return storedObj;
  }
  return '';
}

const input = {
  enterEmail: readAndPrefill().enterEmail,
  enterName: readAndPrefill().enterName,
  enterMessage: readAndPrefill().enterMessage,
};

function storeInput() {
  if (localStorage.getItem('dataStorage') !== JSON.stringify(input)) {
    localStorage.setItem('dataStorage', JSON.stringify(input));
  }
}

email.addEventListener('change', (e) => {
  input.enterEmail = e.target.value;
  storeInput();
});
userName.addEventListener('change', (e) => {
  input.enterName = e.target.value;
  storeInput();
});
userMsg.addEventListener('change', (e) => {
  input.enterMessage = e.target.value;
  storeInput();
});

readAndPrefill();
