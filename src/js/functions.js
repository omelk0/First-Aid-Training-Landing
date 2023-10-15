export function setTimer() {
    const daysElement = document.querySelector(".section-6__time-part--days .section-6__time-part-value");
    const hoursElement = document.querySelector(".section-6__time-part--hours .section-6__time-part-value");
    const minutesElement = document.querySelector(".section-6__time-part--minutes .section-6__time-part-value");
    const secondsElement = document.querySelector(".section-6__time-part--seconds .section-6__time-part-value");

    function updateTimer() {
        const finalDate = new Date("Mar 9, 2024 09:00:00").getTime();
        const now = new Date().getTime();
        const distance = finalDate - now;

        if (distance >= 0) {
            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            daysElement.textContent = days;
            hoursElement.textContent = hours;
            minutesElement.textContent = minutes;
            secondsElement.textContent = seconds;
        } else {
            daysElement.textContent = '-';
            hoursElement.textContent = '-';
            minutesElement.textContent = '-';
            secondsElement.textContent = '-';
            clearInterval(interval);
        }
    }

    const interval = setInterval(updateTimer, 1000);
    updateTimer();
}

export function triggerRegistration() {
    let registerButton = document.querySelector('.section-6__button');
    let registerForm = document.querySelector('.register-popup');
    let closeRegisterFormButton = document.querySelector('.register-popup__close-button');

    registerButton.addEventListener('click', () => {
        registerForm.classList.toggle('show')
    })

    closeRegisterFormButton.addEventListener('click', () => {
        registerForm.classList.remove('show')
    })
}

export function sendRegistrationForm() {
    let form = document.querySelector('.register-popup__form');
    let sendRegistrationFormButton = document.querySelector('.register-popup__button');
    let registerForm = document.querySelector('.register-popup');
    let successMessage = document.querySelector('.form-sent-popup');
    let closeSuccessMessageButton = document.querySelector('.form-sent-popup__button');

    form.addEventListener('submit', (e)=> {
        e.preventDefault();
    })

    sendRegistrationFormButton.addEventListener('click', (e) => {
        registerForm.classList.toggle('show');
        successMessage.classList.toggle('show');
    })

    closeSuccessMessageButton.addEventListener('click', () => {
        successMessage.classList.remove('show');
    })
}