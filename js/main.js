// Animation pour les éléments du workspace
document.addEventListener("DOMContentLoaded", function () {
  // Référence aux éléments
  const laptop = document.querySelector(".laptop");
  const photoFrame = document.querySelector(".photo-frame");
  const coffeeCup = document.querySelector(".coffee-cup");

  // Animation au survol du laptop pour un effet 3D plus prononcé
  laptop.addEventListener("mousemove", function (e) {
    const rect = laptop.getBoundingClientRect();
    const x = e.clientX - rect.left; // Position x de la souris par rapport au laptop
    const y = e.clientY - rect.top; // Position y de la souris par rapport au laptop

    // Calculer les angles de rotation basés sur la position de la souris
    const rotateY = (x / rect.width - 0.5) * 10; // -5 à 5 degrés sur l'axe Y
    const rotateX = (y / rect.height - 0.5) * -5; // -2.5 à 2.5 degrés sur l'axe X

    // Appliquer la transformation
    laptop.style.transform = `perspective(1000px) rotateX(${
      7 + rotateX
    }deg) rotateY(${rotateY}deg)`;
  });

  // Revenir à la rotation par défaut lorsqu'on quitte le laptop
  laptop.addEventListener("mouseleave", function () {
    laptop.style.transform = "perspective(1000px) rotateX(10deg) rotateY(0deg)";
  });

  // Animation au survol du cadre photo
  photoFrame.addEventListener("mousemove", function (e) {
    const rect = photoFrame.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateY = (x / rect.width - 0.5) * 15;
    const rotateX = (y / rect.height - 0.5) * -10;

    photoFrame.style.transform = `rotateY(${12 + rotateY}deg) rotateX(${
      5 + rotateX
    }deg) rotateZ(-2deg)`;
  });

  photoFrame.addEventListener("mouseleave", function () {
    photoFrame.style.transform = "rotateY(12deg) rotateX(5deg) rotateZ(-2deg)";
  });

  // Animation des barres de compétences
  const skillBars = document.querySelectorAll(".skill-progress");

  // Observer pour déclencher l'animation au scroll
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const bar = entry.target;
          const targetWidth = bar.getAttribute("data-width") || bar.style.width;

          // Réinitialiser à 0
          bar.style.width = "0%";

          // Animer jusqu'à la largeur cible
          setTimeout(() => {
            bar.style.width = targetWidth;
          }, 300);

          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 }
  );

  // Observer chaque barre de compétences
  skillBars.forEach((bar) => {
    // Sauvegarder la largeur cible
    const targetWidth = bar.style.width;
    bar.setAttribute("data-width", targetWidth);

    // Réinitialiser à 0 avant l'animation
    bar.style.width = "0%";

    // Observer l'élément
    observer.observe(bar);
  });
});
