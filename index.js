const puppeteer = require('puppeteer');

module.exports = cardashian = (html, opts) => {
  let { width = 200, height = 200 } = opts;
  return puppeteer.launch({ headless: true })
  .then(async (browser) => {
      const page = await browser.newPage();
      await page.setViewport({width, height});
      await page.setContent(html);
      //await page.screenshot({path: 'card.png'});
      const screenshot = await page.screenshot({encoding: 'base64'});
      browser.close();
      return screenshot;
  }).catch(console.error);
}
