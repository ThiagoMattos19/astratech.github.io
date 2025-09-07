const toggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu-icon');
const items = document.querySelectorAll('.menu-icon a');
const botao = document.getElementById('submit');
const formulario = document.getElementById('form');


botao.addEventListener('click', function(event) {
    const name = formulario.name.value;
    const email = formulario.email.value;
    const message = formulario.message.value;

    if (name === '' || email === '' || message === '') {
        event.preventDefault();
        alert('Por favor, preencha todos os campos do formulário antes de enviar.');
    }
    else if (!email.includes('@') || !email.includes('.com')) {
        event.preventDefault();
        alert('Por favor, insira um endereço de e-mail válido.');
    }
    else {
        alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
        formulario.reset();
    }

   
});

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
