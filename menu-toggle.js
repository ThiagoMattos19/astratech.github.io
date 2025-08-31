const toggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu-icon');

toggle.onclick = () => {
    menu.classList.toggle('active');
}

new Swiper('.swiper', {
    loop: true,
    autoplay: {
        delay: 3000,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: false
    },
    allowTouchMove: false
});
