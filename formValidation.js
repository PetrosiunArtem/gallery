let popupBg = document.querySelector('.popup__bg');
let popup = document.querySelector('.popup');
let openPopupButtons = document.querySelectorAll('.open-popup');
let closePopupButton = document.querySelector('.close-popup');

openPopupButtons.forEach((button) => {

    button.addEventListener('click', (e) => {
        e.preventDefault();
        popupBg.classList.add('active');
        popup.classList.add('active');
    })
});

closePopupButton.addEventListener('click', () => {
    popupBg.classList.remove('active');
    popup.classList.remove('active');
});

document.addEventListener('click', (e) => {
    if (e.target === popupBg) {
        popupBg.classList.remove('active');
        popup.classList.remove('active');
    }
});

function validTelephoneInput() {
    const phoneRegex = /^7\d{10}$/;
    if (!phoneRegex.test(myTelephoneInput.value)) {
        myTelephoneInput.className = 'invalid';
        telephoneError.innerHTML = 'Номер начинается с семерки и еще после должно быть ровно 10 цифр!';
    } else {
        myTelephoneInput.className = 'valid';
        telephoneError.innerHTML = '';
    }
    validForm();
}

function validEmailInput() {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(myEmailInput.value)) {
        myEmailInput.className = 'invalid';
        emailError.innerHTML = 'Почта должна быть как в примере: Artem1234@mail.ru';
    } else {
        myEmailInput.className = 'valid';
        emailError.innerHTML = '';
    }
    validForm();
}

function validMessageInput() {
    const pattern = /^[А-Яа-яЁё\s]+$/;
    if (!pattern.test(myMessageInput.value)) {
        myMessageInput.className = 'invalid';
        textError.innerHTML = 'Можно использовать только кириллицу!';
    } else {
        myMessageInput.className = 'valid';
        textError.innerHTML = '';
    }
    validForm();
}

function validForm() {

    mySendButton.disabled = !((myTelephoneInput.classList.contains('valid')) && (myEmailInput.classList.contains('valid')) && (myMessageInput.classList.contains('valid')));
}

function mySendMessageForm(event) {
    event.preventDefault();
    mySendButton.textContent = "Отправляем сообщение";
    setTimeout(() => {
        const formData = new FormData(myForm);
        fetch(myForm.action, {
            method: 'POST', body: formData
        }).then(() => {

            setTimeout(() => {
                mySendButton.textContent = "Мы приняли ваш отзыв, спасибо!";
            }, 2000);
            setTimeout(() => {
                myForm.reset();
                mySendButton.textContent = "Отправить";
            }, 4000)
            mySendButton.disabled = true;

        })
    }, 1000);
}

const myEmailInput = document.getElementById('email');
const myTelephoneInput = document.getElementById('tel');
const myMessageInput = document.getElementById('message');
const mySendButton = document.getElementById('send-button');
const myForm = document.getElementById('form');

const telephoneError = document.getElementById('telError');
const emailError = document.getElementById('emailError');
const textError = document.getElementById('textError');

myTelephoneInput.addEventListener('input', validTelephoneInput);
myEmailInput.addEventListener('input', validEmailInput);
myMessageInput.addEventListener('input', validMessageInput);

myForm.addEventListener('submit', mySendMessageForm);
