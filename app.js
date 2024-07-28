const text = document.querySelector("._inside");

const Animate = () => {
    setTimeout(() => {
        text.textContent = "Programista";
    }, 0);
    setTimeout(() => {
        text.textContent = "Pianista";
    }, 4000);
    setTimeout(() => {
        text.textContent = "Idiota";
    }, 8000);
    setTimeout(() => {
        text.textContent = "Dopszu";
    }, 12000);
}
Animate();
setInterval(Animate, 16000);
