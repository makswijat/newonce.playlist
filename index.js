const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://newonce.radio');
  await page.screenshot({path: 'example.png'});

  await browser.close();
})();
