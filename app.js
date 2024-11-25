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
let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let zmienna = 0;
btn1.onclick = () => {
    if(zmienna == 0 || zmienna == 2 || zmienna == 4) {
        zmienna++;
    }
    else if(zmienna == 5) {
        zmienna = 0;
        window.open("logowanie.php");
    } 
    else {
        zmienna = 0;
    }
}
btn2.onclick = () => {
    if(zmienna == 1 || zmienna == 3) {
        zmienna++;
    }
    else {
        zmienna = 0;
    }
}