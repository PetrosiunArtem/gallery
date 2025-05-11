let tempClose = document.querySelector('.close-notification-popup');
let notificationPopupBg = document.querySelector('.notification-popup__bg');
let notificationPopup = document.querySelector('.notification-popup');
tempClose.addEventListener('click', () => {
    notificationPopupBg.classList.remove('active');
    notificationPopup.classList.remove('active');
});

setTimeout(() => {
    if (!localStorage.getItem('flag')) {
        notificationPopupBg.classList.add('active');
        notificationPopup.classList.add('active');
        localStorage.setItem('flag', 'true');
    } 
}, 3_000);
