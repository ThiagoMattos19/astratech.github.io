const toggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu-icon');
const items = document.querySelectorAll('.menu-icon a');

toggle.onclick = () => {
    menu.classList.toggle('active');
}

items.forEach(item => {
    item.onclick = () => {
        menu.classList.remove('active');
    }
});

items

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


document.addEventListener('DOMContentLoaded', function() {
    const logo = document.getElementById('logoParceiro');
    const parceiroExpandido = document.getElementById('parceiroExpandido');
    
    if (logo && parceiroExpandido) {
        logo .addEventListener('click', function(){
            parceiroExpandido.classList.toggle('ativo');
        });
    }
});
