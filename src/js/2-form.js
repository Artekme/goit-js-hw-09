const form = document.querySelector('.feedback-form');
const localStorageKey = 'feedback-form-state';

form.addEventListener('input', () => {
  const enteredData = {
    email: form.elements.email.value.trim(),
    message: form.elements.message.value.trim(),
  };
  localStorage.setItem(localStorageKey, JSON.stringify(enteredData));
});

const savedInputData = JSON.parse(localStorage.getItem(localStorageKey));
// console.log(savedInputData);
if (savedInputData) {
  form.elements.email.value = savedInputData.email;
  form.elements.message.value = savedInputData.message;
}

form.addEventListener('submit', event => {
  event.preventDefault();
  if (form.elements.email.value === '' || form.elements.message.value === '') {
    alert('Please fill in both fields');
    return;
  }
  console.log(savedInputData);
  form.reset();
  localStorage.removeItem(localStorageKey);
});
