const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://example.com');

    // This is trippy... it must be that page.evaluate teleports
    // the function into a browser js thread and runs it there,
    // because document is not defined in this scope.
    const dimensions = await page.evaluate(() => {
        return {
            width: document.documentElement.clientWidth,
            height: document.documentElement.clientHeight,
            deviceScaleFactor: window.devicePixelRatio
        }
    });

    console.log('Dimensions:', dimensions)

    await browser.close()
})();