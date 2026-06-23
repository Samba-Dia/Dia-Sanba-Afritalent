//  Bouton mode sombre
const themeToggle = document.getElementById("themeToggle");
// verifie si le mode sombre est enregistré
if(localStorage.getItem("theme") === "dark"){
    document.body.classList.add("dark-mode");
}
// Active ou désactive le mode sombre au click
themeToggle.addEventListener("click",() =>{
    document.body.classList.toggle("dark-mode");
    if(document.body.classList.contains("dark-mode")){
        localStorage.setItem("theme","dark");
    }
    else{
        localStorage.setItem("theme","light");
    }
});

// Navbar dynamique au défilement

window.addEventListener("scroll",()=>{
    const navbar = document.querySelector(".navbar");
    if(window.scrollY > 50) {
        navbar.classList.add("navbar-scroll");
    }
    else{
        navbar.classList.remove("navbar-scroll");
    }
});

// Bouton retour en haut

const backToTop = document.getElementById("backToTop");
if(backToTop){
// Affiche le bouton aprés 200px
    window.addEventListener("scroll", () => {
        if(window.scrollY > 200){
            backToTop.style.display = "block";
        }else{
            backToTop.style.display = "none";
        }
    });
// Remonte en haut de la page
    backToTop.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });

}

// Animation des section

const sections = document.querySelectorAll(".fade-section");
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }
    });
});
// observe tout les sections
sections.forEach(section => {
    observer.observe(section);
});

// animation de compteurs

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
            // arrét de l'animation aprés premiers exécution
            counterObserver.unobserve(counter);
        }
    });
});
// observe tout les compteurs
counters.forEach(counter => {
    counterObserver.observe(counter);
});

// filtrage

const filterButtons = document.querySelectorAll(".filter-btn");
const freelancerCards = document.querySelectorAll(".freelancer-card");
filterButtons.forEach(button => {
    button.addEventListener("click", () => {
        const filter = button.dataset.filter;
        freelancerCards.forEach(card => {
            if(filter === "all" || card.dataset.category === filter){
                card.style.display = "block";
            }
             else {
                card.style.display = "none";
            }

        });

    });
});

// validation formulaire de contact

const form = document.getElementById("contactForm");
form.addEventListener("submit", function(e) {
    // empéche l'envoi du formulaire
    e.preventDefault();
    // reinitialise les message d'erreur
    document.getElementById("prenomError").textContent = "";
    document.getElementById("nomError").textContent = "";
    document.getElementById("emailError").textContent = "";
    document.getElementById("messageError").textContent = "";
    // recupere les valeur saisie
    let prenom = document.getElementById("prenom").value.trim();
    let nom = document.getElementById("nom").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();
    // Expression pour verifier l'email
    let regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let valide = true;
    // verifie le prenom
    if (prenom === "") {
        document.getElementById("prenomError").textContent =
        "Le prénom est obligatoire";
        valide = false;
    }
    //  verifie le nom
    if (nom === "") {
        document.getElementById("nomError").textContent =
        "Le nom est obligatoire";
        valide = false;
    }
    //  verifie l'email
    if (!regexEmail.test(email)) {
        document.getElementById("emailError").textContent =
        "Email invalide";
        valide = false;
    }
    // verifie le message
    if (message.length < 20) {
        document.getElementById("messageError").textContent =
        "Le message doit contenir au moins 20 caractères";
        valide = false;
    } 
    // si tout est correct
    if (valide) {
        alert("Message envoyé avec succès !");
        form.reset();
    }
});