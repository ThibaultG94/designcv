document.addEventListener("DOMContentLoaded", async () => {
  const firstName = "Thibault";
  const lastName = "Guilhem";
  const phoneValue = "06 42 55 00 71";
  const locationValue = "Noisy-le-Grand";
  const fullNameValue = `${firstName} ${lastName}`;
  const emailValue = firstName.toLowerCase() + lastName.toLowerCase();
  const githubValue = firstName + lastName[0];
  const linkedInValue = `${firstName.toLowerCase()}-${lastName[0].toLowerCase()}`;
  const linuxValue = firstName.toLowerCase();

  const fullNames = document.querySelectorAll(".fullname-span");
  const email = document.querySelectorAll(".email-span");
  const phone = document.getElementById("phone");
  const location = document.getElementById("location");
  const github = document.getElementById("github");
  const linkedIn = document.getElementById("linkedIn");
  const linux = document.querySelectorAll(".linux");

  fullNames.forEach((fullName) => {
    fullName.textContent = fullNameValue;
  });
  email.forEach((email) => {
    email.textContent = emailValue;
  });

  phone.textContent = phoneValue;
  location.textContent = locationValue;
  github.textContent = githubValue;
  linkedIn.textContent = linkedInValue;
  linux.forEach((name) => {
    name.textContent = linuxValue;
  });

  const table = document.querySelector(".wooden-table");
  for (let i = 0; i < 10; i++) {
    // ajuste le nombre selon tes besoins
    const line = document.createElement("div"); // utiliser div au lieu de hr pour les lignes verticales
    line.classList.add("table-line");
    line.style.left = `${i * 160 + 80}px`; // positionne horizontalement
    table.appendChild(line);
  }
});
