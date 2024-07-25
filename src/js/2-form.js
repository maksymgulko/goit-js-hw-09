const formData = {
  email: '',
  message: '',
};

const form = document.querySelector('.feedback-form');
const emailData = form.elements.email;
const textarea = form.elements.message;
const localStorageKey = 'feedback-form-state';

const localData = JSON.parse(localStorage.getItem(localStorageKey)) ?? '';

if (localData.email) {
  form.elements.email.value = localData.email;
  formData.email = localData.email;
}

if (localData.message) {
  form.elements.message.value = localData.message;
  formData.message = localData.message;
}

form.addEventListener('input', event => {
  formData.email = emailData.value;
  formData.message = textarea.value;
  localStorage.setItem(localStorageKey, JSON.stringify(formData));
});

form.addEventListener('submit', event => {
  event.preventDefault();
  console.log(formData);
  localStorage.removeItem(localStorageKey);
  form.reset();
});
