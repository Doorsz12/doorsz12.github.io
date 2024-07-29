const text = document.querySelector("._inside");
const about = document.getElementById("abt");

const Animate = () => {
    setTimeout(() => {
        text.textContent = "Programista";
    }, 0);
    setTimeout(() => {
        text.textContent = "Pianista";
    }, 4000);
    setTimeout(() => {
        text.textContent = "Marzyciel";
    }, 8000);
    setTimeout(() => {
        text.textContent = "Dopszu";
    }, 12000);
}
Animate();
setInterval(Animate, 16000);

about.addEventListener('click', function() {
    document.getElementById("tep1").scrollIntoView({behavior: "smooth"});
});
