document.addEventListener("DOMContentLoaded", async () => {
  const firstName = "Jean";
  const lastName = "Albert";
  const phoneValue = "06 24 55 00 17";
  const locationValue = "Paris";
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
});
