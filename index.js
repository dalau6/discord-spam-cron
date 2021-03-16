const puppeteer = require('puppeteer');
const fetch = require('node-fetch');
const { id, password } = require('./auth.json');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://discord.com/login');
  await page.type('.inputDefault-_djjkz[name=email]', id);
  await page.type('.inputDefault-_djjkz[name=password]', password);
  await page.click('button.marginBottom8-AtZOdT');
  await page.waitForNavigation();
  await page.goto('https://discord.com/channels/798398605614514196/798398605907460100');
  
  setInterval(async () => {
    const response = await fetch('https://api.whatdoestrumpthink.com/api/v1/quotes/random');
    const { message } = await response.json();
    await page.focus('[data-slate-zero-width=z]');
    await page.type('[data-slate-zero-width=z]', message);
    await page.keyboard.press('Enter');
  }, 1000);
})();
