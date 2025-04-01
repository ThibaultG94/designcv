document.addEventListener("DOMContentLoaded", async () => {
  const fullNameValue = "Jean Albert";
  const emailValue = "jeanalbert";
  const phoneValue = "06 24 55 00 17";
  const locationValue = "Paris";
  const githubValue = "JeanA";
  const linkedInValue = "jean-a";

  const fullNames = document.querySelectorAll(".fullname-span");
  const email = document.getElementById("email");
  const phone = document.getElementById("phone");
  const location = document.getElementById("location");
  const github = document.getElementById("github");
  const linkedIn = document.getElementById("linkedIn");

  fullNames.forEach((fullName) => {
    fullName.textContent = fullNameValue;
  });

  email.textContent = emailValue;
  phone.textContent = phoneValue;
  location.textContent = locationValue;
  github.textContent = githubValue;
  linkedIn.textContent = linkedInValue;
});
