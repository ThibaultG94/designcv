const puppeteer = require("puppeteer");

(async () => {
  // Generate PDF
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  // Get the absolute path to your HTML file
  const htmlPath = "/home/thibault/work/designCV/cv.html";
  const fileUrl = "file://" + htmlPath;

  console.log("Tentative d'accès à:", fileUrl);

  // Upload your HTML file
  await page.goto(fileUrl, {
    waitUntil: "networkidle2",
  });

  // Wait for everything to load (alternative to waitForTimeout)
  await new Promise((resolve) => setTimeout(resolve, 3000));

  // Generate PDF
  await page.pdf({
    path: "cv-developpeur.pdf",
    format: "A4",
    printBackground: true,
    margin: {
      top: "0mm",
      right: "0mm",
      bottom: "0mm",
      left: "0mm",
    },
  });

  console.log("PDF généré avec succès!");
  await browser.close();
})();
