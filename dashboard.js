const side = document.querySelector(".sidebar");
const menu = document.querySelector(".hamburger");
const active = document.querySelector(".active");

menu.addEventListener("click", ()=>{
    side.classList.toggle("open")
})
