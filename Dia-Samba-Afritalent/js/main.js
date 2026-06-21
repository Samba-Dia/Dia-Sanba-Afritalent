const themeToggle = document.getElementById("themeToggle");
if(localStorage.getItem("theme") === "dark"){
    document.body.classList.add("dark-mode");
}
themeToggle.addEventListener("click",() =>{
    document.body.classList.toggle("dark-mode");
    if(document.body.classList.contains("dark-mode")){
        localStorage.setItem("theme","dark");
    }
    else{
        localStorage.setItem("theme","light");
    }
});

window.addEventListener("scroll",()=>{
    const navbar = document.querySelector(".navbar");
    if(window.scrollY > 50) {
        navbar.classList.add("navbar-scroll");
    }
    else{
        navbar.classList.remove("navbar-scroll");
    }
});

// const backToTop = document.getElementById("backToTop");

// if(backToTop){

//     window.addEventListener("scroll", () => {
//         if(window.scrollY > 200){
//             backToTop.style.display = "block";
//         }else{
//             backToTop.style.display = "none";
//         }
//     });

//     backToTop.addEventListener("click", () => {
//         window.scrollTo({
//             top: 0,
//             behavior: "smooth"
//         });
//     });

// }
const backToTop = document.getElementById("backToTop");

if(backToTop){

    window.addEventListener("scroll", () => {
        if(window.scrollY > 200){
            backToTop.style.display = "block";
        }else{
            backToTop.style.display = "none";
        }
    });

    backToTop.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });

}