// =========================
// ELEMENTOS DOM
// =========================
const toggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu-icon');
const items = document.querySelectorAll('.menu-icon a');

const botao = document.getElementById('submit');
const formulario = document.getElementById('form');

const logo = document.getElementById('logoParceiro');
const parceiroExpandido = document.getElementById('parceiroExpandido');

const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');

const nameError = document.getElementById('name-error');
const emailError = document.getElementById('email-error');
const messageError = document.getElementById('message-error');


// =========================
// MENU TOGGLE
// =========================
if (toggle && menu) {
    toggle.addEventListener('click', () => {
        menu.classList.toggle('active');
    });

    items.forEach(item => {
        item.addEventListener('click', () => {
            menu.classList.remove('active');
        });
    });
}


// =========================
// FORMULÁRIO
// =========================
botao?.addEventListener('click', function(event) {
    const name = formulario.name.value.trim();
    const email = formulario.email.value.trim();
    const message = formulario.message.value.trim();

    // Limpar erros anteriores
    [nameInput, emailInput, messageInput].forEach(el => el.classList.remove('invalid-field', 'invalid-email'));
    [nameError, emailError, messageError].forEach(err => err.style.display = 'none');

    let hasError = false;

    if (!name) {
        event.preventDefault();
        nameInput.classList.add('invalid-field');
        nameError.style.display = 'block';
        hasError = true;
    }

    if (!email) {
        event.preventDefault();
        emailInput.classList.add('invalid-email');
        emailError.style.display = 'block';
        hasError = true;
    } else if (!email.includes('@') || !email.includes('.com')) {
        event.preventDefault();
        emailInput.classList.add('invalid-email');
        emailError.style.display = 'block';
        hasError = true;
    }

    if (!message) {
        event.preventDefault();
        messageInput.classList.add('invalid-field');
        messageError.style.display = 'block';
        hasError = true;
    }

    if (!hasError) {
        event.preventDefault();
        alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
        formulario.reset();
    }
});

// Remover erros ao digitar
nameInput?.addEventListener('input', () => {
    nameInput.classList.remove('invalid-field');
    nameError.style.display = 'none';
});

emailInput?.addEventListener('input', () => {
    emailInput.classList.remove('invalid-email');
    emailError.style.display = 'none';
});

messageInput?.addEventListener('input', () => {
    messageInput.classList.remove('invalid-field');
    messageError.style.display = 'none';
});


// =========================
// SWIPER
// =========================
new Swiper('.swiper', {
    loop: true,
    autoplay: { delay: 3000 },
    pagination: { el: '.swiper-pagination', clickable: false },
    allowTouchMove: false
});


// =========================
// PARCEIRO EXPANDIDO
// =========================
document.addEventListener('DOMContentLoaded', () => {
    if (logo && parceiroExpandido) {
        logo.addEventListener('click', () => {
            parceiroExpandido.classList.toggle('ativo');
        });
    }
});
