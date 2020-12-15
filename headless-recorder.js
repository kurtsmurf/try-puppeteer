// This test generated using headless-recorder https://github.com/checkly/headless-recorder (and a little manual tweaking)

const puppeteer = require('puppeteer');
(async () => {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()
  
  await page.goto('https://www.wikipedia.org/')
  
  await page.setViewport({ width: 1920, height: 969 })
  
  await page.waitForSelector('.search-container > #search-form #searchInput')
  await page.click('.search-container > #search-form #searchInput')
  
  await page.type('.search-container > #search-form #searchInput', 'aztec empire')
  
  await page.waitForSelector('#www-wikipedia-org > .search-container > #search-form > fieldset > .pure-button')
  await page.click('#www-wikipedia-org > .search-container > #search-form > fieldset > .pure-button')

  await page.waitForSelector('#content')
  await page.screenshot({ path: 'aztec-empire.png' });

  await browser.close()
})()