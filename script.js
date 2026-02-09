function scrollPara(id) {
    document.getElementById(id).scrollIntoView({
        behavior: "smooth"
    });
}

function enviarWhatsApp() {
    const nome = document.getElementById("nome").value.trim();
    const mensagem = document.getElementById("mensagem").value.trim();

    if (!nome || !mensagem) {
        alert("Por favor, preencha seu nome e descreva o projeto.");
        return;
    }

    const telefone = "5541988502450"; // DDI + DDD + número
    const texto = encodeURIComponent(
        `Olá! Meu nome é ${nome}.\nGostaria de um site!\n\nProjeto:\n${mensagem}`
    );

    window.open(
        `https://wa.me/${telefone}?text=${texto}`,
        "_blank"
    );
}

const cards = document.querySelectorAll('.card');

cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = ((y - centerY) / centerY) * -8;
        const rotateY = ((x - centerX) / centerX) * 8;

        const percentX = (x / rect.width) * 100;
        const percentY = (y / rect.height) * 100;

        card.style.setProperty('--x', `${percentX}%`);
        card.style.setProperty('--y', `${percentY}%`);

        card.style.transform = `
            rotateX(${rotateX}deg)
            rotateY(${rotateY}deg)
            translateY(-10px)
            scale(1.03)
        `;
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = `
            rotateX(0deg)
            rotateY(0deg)
            translateY(0)
            scale(1)
        `;
    });
});

/* HEADER SCROLL */
window.addEventListener("scroll", () => {
    const nav = document.querySelector("nav");
    if (!nav) return;
    nav.classList.toggle("scrolled", window.scrollY > 20);
});

setTimeout(() => {
    const botoes = document.getElementById('heroBotoes');
    if (botoes) {
        botoes.classList.add('visivel');
    }
}, 9000);

/* MENU MOBILE */
const toggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');

if (toggle && menu) {
    toggle.addEventListener('click', () => {
        menu.classList.toggle('ativo');
    });

    menu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            menu.classList.remove('ativo');
        });
    });
}




