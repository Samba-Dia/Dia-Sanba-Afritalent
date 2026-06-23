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

// const filterButtons = document.querySelectorAll(".filter-btn");
// const cards = document.querySelectorAll(".freelancer-card");

// filterButtons.forEach(button => {
//     button.addEventListener("click", () => {
//         const filter = button.dataset.filter;

//         cards.forEach(card => {
//             if (filter === "all" || card.dataset.category === filter) {
//                 card.style.display = "block";
//             } else {
//                 card.style.display = "none";
//             }
//         });
//     });
// }); 
 
const form = document.getElementById("contactForm");

form.addEventListener("submit", function(e) {
    e.preventDefault();

    document.getElementById("prenomError").textContent = "";
    document.getElementById("nomError").textContent = "";
    document.getElementById("emailError").textContent = "";
    document.getElementById("messageError").textContent = "";

    let prenom = document.getElementById("prenom").value.trim();
    let nom = document.getElementById("nom").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();

    let regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    let valide = true;

    if (prenom === "") {
        document.getElementById("prenomError").textContent =
        "Le prénom est obligatoire";
        valide = false;
    }

    if (nom === "") {
        document.getElementById("nomError").textContent =
        "Le nom est obligatoire";
        valide = false;
    }

    if (!regexEmail.test(email)) {
        document.getElementById("emailError").textContent =
        "Email invalide";
        valide = false;
    }

    if (message.length < 20) {
        document.getElementById("messageError").textContent =
        "Le message doit contenir au moins 20 caractères";
        valide = false;
    }

    if (valide) {
        alert("Message envoyé avec succès !");
        form.reset();
    }
});