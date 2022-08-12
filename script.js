const btnMobile = document.getElementById("btn-mobile");

function toggleMenu(event) {
    if (event.type === "touchstart") event.preventDefault();
    const nav = document.getElementById("nav");
    nav.classList.toggle("active");
    const active = nav.classList.contains("active");
    event.currentTarget.setAttribute("aria-expanded", active);
    if (active) {
        event.currentTarget.setAttribute("aria-label", "Fechar Menu");
    } else {
        event.currentTarget.setAttribute("aria-label", "Abrir Menu");
    }
}

btnMobile.addEventListener("click", toggleMenu);
btnMobile.addEventListener("touchstart", toggleMenu);

const btnBuy = document.getElementById("btn-buy-emphasis");
const btnBuy2 = document.getElementById("btn-buy-emphasis2");
const btnBuy3 = document.getElementById("btn-buy-emphasis3");

function hoverOnBtn() {
    btnBuy.style.marginTop = "0";
}

function hoverLeaveBtn() {
    btnBuy.style.marginTop = "7px";
}

function hoverOnBtn2() {
    btnBuy2.style.marginTop = "0";
}

function hoverLeaveBtn2() {
    btnBuy2.style.marginTop = "7px";
}

function hoverOnBtn3() {
    btnBuy3.style.marginTop = "0";
}

function hoverLeaveBtn3() {
    btnBuy3.style.marginTop = "7px";
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}