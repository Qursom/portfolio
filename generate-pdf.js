// Run: npm install && node generate-pdf.js
// Requires Node.js 18+ and a Playwright Chromium install (done by npm install).
const { chromium } = require('playwright');
const path = require('path');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  const resumePath = path.resolve(__dirname, 'resume.html');
  await page.goto(`file://${resumePath}`, { waitUntil: 'networkidle' });

  await page.pdf({
    path: 'Qursom-Saqlain-Resume.pdf',
    format: 'A4',
    printBackground: false,
    margin: { top: '1.5cm', right: '1.5cm', bottom: '1.5cm', left: '1.5cm' },
  });

  await browser.close();
  console.log('Generated Qursom-Saqlain-Resume.pdf');
})();
