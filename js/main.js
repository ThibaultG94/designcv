document.addEventListener("DOMContentLoaded", function () {
  require("dotenv").config();

  // Environment variables
  const fullName = process.env.FULLNAME;
  consolest.log(fullName);

  // Reference to elements
  const laptop = document.querySelector(".laptop");
});
