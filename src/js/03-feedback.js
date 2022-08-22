import throttle from 'lodash.throttle';

const refs = {
    form: document.querySelector('.feedback-form'),
    input: document.querySelector('.feedback-form input'),
    textarea: document.querySelector('.feedback-form textarea'),
}

refs.form.addEventListener('submit', throttle(onFormSubmit, 500));
refs.input.addEventListener('input', throttle(onInput, 500));
refs.textarea.addEventListener('input', throttle(onInput, 500));

const KEY = 'feedback-form-state';

addSavedData();

 const data = {
    email: refs.input.value,
    message: refs.textarea.value,
  };

function onFormSubmit(event) {
  event.preventDefault();
   
  event.target.reset();
  localStorage.removeItem(KEY);
  console.log(data);
}
function onInput() {

  localStorage.setItem(KEY, JSON.stringify(data));
  
}
function addSavedData() {
  const parseText = JSON.parse(localStorage.getItem(KEY));
  console.log(parseText);

  if (parseText) {
    refs.input.value = parseText.email;
    refs.textarea.value = parseText.message;
  }
}
