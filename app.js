const navList = document.querySelector(".nav-list");
const hamburger = document.querySelector(".hamburger")

hamburger.addEventListener("click", () => {
    navList.classList.toggle("active");
})

window.addEventListener("resize", () => {
    if(window.innerWidth > 768){
        navList.classList.remove("active");
    }

}