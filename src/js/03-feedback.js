const throttle = require("lodash.throttle");

const refs = {
    form: document.querySelector('.feedback-form'),
    email: document.querySelector('input'),
    message: document.querySelector('textarea'),
};
const KEY_STORAGE = 'feedback-form-state'; 

refs.form.addEventListener("input", throttle(onWriteInfToStorage, 500));
refs.form.addEventListener("submit", onSubmitForm);
onCheckStorage();

function onSubmitForm(evt) {
     const value = {};
    value.email = refs.email.value;
    value.message = refs.message.value;
    evt.preventDefault();
    refs.form.reset();
    localStorage.removeItem(KEY_STORAGE);
    console.log(value);
}

function onWriteInfToStorage() {
    const value = {};
    value.email = refs.email.value;
    value.message = refs.message.value;
    localStorage.setItem(KEY_STORAGE, JSON.stringify(value));
    
    // console.log(value);
    // console.log(refs.message.value)
};

function onCheckStorage() {
    const dataForm = localStorage.getItem(KEY_STORAGE);

    if (dataForm) {
        const dataObject = JSON.parse(dataForm);
        refs.email.value = dataObject.email;
        refs.message.value = dataObject.message;
        // console.log(dataObject);
    };

};

