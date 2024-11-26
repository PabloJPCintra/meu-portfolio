window.onload = () => {
    alert('Bem-vindo ao meu portfólio!');
    
    const allLinks = document.querySelectorAll('a');
    allLinks.forEach(link => {
        link.setAttribute('target', '_blank');
    });
};

const menuLinks = document.querySelectorAll('.cabeçalho__menu__link');
menuLinks.forEach(link => {
    link.addEventListener('mouseover', () => {
        link.style.color = '#ffffff';
    });
    link.addEventListener('mouseout', () => {
        link.style.color = 'var(--cor-terciaria)';
    });
});