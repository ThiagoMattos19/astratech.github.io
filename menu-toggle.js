const toggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu-icon');
const items = document.querySelectorAll('.menu-icon a');
const botao = document.getElementById('submit');
const formulario = document.getElementById('form');
const logo = document.getElementById('logoParceiro');
const parceiroExpandido = document.getElementById('parceiroExpandido')
const email_error = document.getElementById('email-error');
const name_validate = document.querySelector('.name-validate');
const email_validate = document.querySelector('.email-validate');
const message_validate = document.querySelector('.message-validate');
const message_error = document.getElementById('message-error');
const name_error = document.getElementById('name-error');


toggle.onclick = () => {
    menu.classList.toggle('active');
}

items.forEach(item => {
    item.onclick = () => {
        menu.classList.remove('active');
    }
});


botao.addEventListener('click', function(event) {
    const name = formulario.name.value;
    const email = formulario.email.value;
    const message = formulario.message.value;

    // Limpar classes de erro anteriores
    document.getElementById('name').classList.remove('invalid-field');
    document.getElementById('email').classList.remove('invalid-email');
    document.getElementById('message').classList.remove('invalid-field');

    let hasError = false;

    // Validar nome
    if (name === '') {
        event.preventDefault();
        document.getElementById('name').classList.add('invalid-field');
        hasError = true;
        name_error.style.display = 'block';
    }

    if (email === '') {
        event.preventDefault();
        document.getElementById('email').classList.add('invalid-email');
        email_error.style.display = 'block';
        hasError = true;
    } else if (!email.includes('@') || !email.includes('.com')) {
        event.preventDefault();
        document.getElementById('email').classList.add('invalid-email');
        email_error.style.display = 'block';
        hasError = true;
    }
    if(message === '') {
        event.preventDefault();
        document.getElementById('message').classList.add('invalid-field');
        message_error.style.display = 'block';
        hasError = true;
    } 

    if (!hasError) {
        event.preventDefault();
        alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
        formulario.reset();
    }
});

document.getElementById('message').addEventListener('input', function() {
    this.classList.remove('invalid-field');
    message_error.style.display = 'none';
});

document.getElementById('name').addEventListener('input', function() {
    this.classList.remove('invalid-field');
    name_error.style.display = 'none';
});

document.getElementById('email').addEventListener('input', function() {
    this.classList.remove('invalid-email');
    email_error.style.display = 'none';
});

toggle.onclick = () => {
    menu.classList.toggle('active');
}

items.forEach(item => {
    item.onclick = () => {
        menu.classList.remove('active');
    }
});

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
  
    if (logo && parceiroExpandido) {
        logo .addEventListener('click', function(){
            parceiroExpandido.classList.toggle('ativo');
        });
    }
});


