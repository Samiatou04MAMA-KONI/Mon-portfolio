// Sélectionner tous les éléments à animer
const elements = document.querySelectorAll('.animate-on-scroll, .animate-left, .animate-right');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add('visible'); // déclenche l'animation
      observer.unobserve(entry.target);      // stop observer après animation
    }
  });
}, {
  threshold: 0.1 // déclenche quand 10% de l’élément est visible
});

// Observer chaque élément
elements.forEach(el => observer.observe(el));

//animation de mot
const words = ["an electronics engineer ", "a web developer"];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;
const textElement = document.getElementById("animated-text");

function typeEffect() {
  const currentWord = words[wordIndex];

  if (isDeleting) {
    textElement.textContent = currentWord.substring(0, charIndex--);
  } else {
    textElement.textContent = currentWord.substring(0, charIndex++);
  }

  if (!isDeleting && charIndex === currentWord.length) {
    isDeleting = true;
    setTimeout(typeEffect, 1000); // pause après mot complet
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    wordIndex = (wordIndex + 1) % words.length; // mot suivant
    setTimeout(typeEffect, 200);
  } else {
    setTimeout(typeEffect, isDeleting ? 50 : 50); // vitesse écriture/suppression
  }
}

typeEffect();

// Fonction pour ouvrir/fermer le menu
        function toggleMenu() {
            const header = document.querySelector('header');
            header.classList.toggle('menu-open');
        }
        
        // Fonction pour fermer le menu
        function closeMenu() {
            const header = document.querySelector('header');
            header.classList.remove('menu-open');
        }
        
        // Fermer le menu quand on clique en dehors
        document.addEventListener('click', function(event) {
            const header = document.querySelector('header');
            const menuIcon = header.querySelector('div');
            
            // Si on clique en dehors du header et que le menu est ouvert
            if (!header.contains(event.target) && header.classList.contains('menu-open')) {
                closeMenu();
            }
        });
        
        // Fermer le menu lors du redimensionnement vers desktop
        window.addEventListener('resize', function() {
            if (window.innerWidth > 480) {
                closeMenu();
            }
        });
        
        // Smooth scrolling pour les liens de navigation
        document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
                closeMenu();
            });
        });
        
        // Empêcher la propagation du clic sur le menu hamburger
        document.querySelector('header div').addEventListener('click', function(event) {
            event.stopPropagation();
        });


