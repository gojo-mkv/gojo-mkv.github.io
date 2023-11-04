document.addEventListener('DOMContentLoaded', () => {
    let pat = document.querySelector('div');
    pat.style.color = randomColor();
});

function randomColor() {
    hexa = '1234567890ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += hexa[Math.floor(Math.random() * 16)];
    }
    return color;
}