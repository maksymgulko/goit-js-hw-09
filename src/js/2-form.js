const formData = {
  email: '',
  message: '',
};

const form = document.querySelector('.feedback-form');
const emailData = form.elements.email;
const textarea = form.elements.message;
const localStorageKey = 'feedback-form-state';

//я сподіваюся, що заміна '' на {} виправить 2-ий пункт з аналізу критичних питань, а якщо ні, то прошу пояснити помилку детальніше, будь ласка, бо не дуже зрозумів її
const localData = JSON.parse(localStorage.getItem(localStorageKey)) ?? {};

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
  if (formData.email === '') {
    alert('Both fields should be filled!');
    return;
  } else if (formData.message === '') {
    alert('Both fields should be filled!');
    return;
  }
  console.log(formData);
  localStorage.removeItem(localStorageKey);
  form.reset();
});
