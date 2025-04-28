function mudarIdioma(lang) {
    const elements = document.querySelectorAll('[data-lang="true"]');
    elements.forEach(el => {
        // Atualiza o texto com HTML ao invés de apenas texto simples
        el.innerHTML = el.getAttribute(`data-${lang}`);
    });
}

// Adicionar event listeners aos ícones das bandeiras
document.querySelector('[data-lang="pt"]').addEventListener('click', function (e) {
    e.preventDefault(); // Impede o comportamento de link padrão
    mudarIdioma('pt');
});

document.querySelector('[data-lang="en"]').addEventListener('click', function (e) {
    e.preventDefault(); // Impede o comportamento de link padrão
    mudarIdioma('en');
});
