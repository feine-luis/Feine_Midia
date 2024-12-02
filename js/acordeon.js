// Selecionar todos os títulos do acordeão
document.querySelectorAll('.toggle-title').forEach(title => {
    title.addEventListener('click', () => {
        const item = title.parentElement;

        // Alternar a classe 'active' no item clicado
        item.classList.toggle('active');

        // Garantir que apenas um item esteja aberto, se necessário
        document.querySelectorAll('.toggle-item').forEach(otherItem => {
            if (otherItem !== item) {
                otherItem.classList.remove('active');
            }
        });
    });
});
