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

const sections = document.querySelectorAll(".fade-section");
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }
    });
});

sections.forEach(section => {
    observer.observe(section);
});

const counters = document.querySelectorAll(".counter");

const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            const counter = entry.target;
            const target = +counter.getAttribute("data-target");
            let count = 0;

            const updateCounter = () => {
                const increment = target / 100;

                if(count < target){
                    count += increment;
                    counter.innerText = Math.floor(count);
                    setTimeout(updateCounter, 20);
                } else {
                    counter.innerText = target;
                }
            };

            updateCounter();
            counterObserver.unobserve(counter);
        }
    });
});

counters.forEach(counter => {
    counterObserver.observe(counter);
});