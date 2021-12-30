const form = document.getElementById('form');
const email = document.getElementById('mail');
const nameInput = document.getElementById('name');
const messageInput = document.getElementById('msg');

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

// function readAndPrefill() {
//   const string = localStorage.getItem('dataStorage');
//   if (string) {
//     const storedObj = JSON.parse(string);
//     email.value = storedObj.enterName;
//     userName.value = storedObj.enterEmail;
//     userMsg.value = storedObj.enterMessage;
//     return storedObj;
//   }
//   return '';
// }

// const input = {
//   enterName: readAndPrefill().enterName,
//   enterEmail: readAndPrefill().enterEmail,
//   enterMessage: readAndPrefill().enterMessage,
// };

// function storeInput() {
//   if (localStorage.getItem('dataStorage') !== JSON.stringify(input)) {
//     localStorage.setItem('dataStorage', JSON.stringify(input));
//   }
// }

// userName.addEventListener('change', (e) => {
//   input.enterName = e.target.value;
//   storeInput();
// });
// email.addEventListener('change', (e) => {
//   input.enterEmail = e.target.value;
//   storeInput();
// });
// userMsg.addEventListener('change', (e) => {
//   input.enterMessage = e.target.value;
//   storeInput();
// });

// readAndPrefill();


// userMsg.addEventListener('change', (e) => {
//   input.enterMessage = e.target.value;
//   storeInput();
// });


form.addEventListener('input', (e) => {
  const input = {
    enterName: nameInput.value,
    enterEmail: email.value,
    enterMessage: messageInput.value
  };
  localStorage.setItem('dataStorage', JSON.stringify(input));
});

let savedDataStorage = localStorage.getItem('dataStorage');
savedDataStorage = JSON.parse(savedDataStorage);

  window.onload = () => {
    console.log(savedDataStorage)
    if (savedDataStorage) {
      nameInput.value = savedDataStorage.enterName,
      email.value = savedDataStorage.enterEmail,
      messageInput.value = savedDataStorage.enterMessage
    }
  };

