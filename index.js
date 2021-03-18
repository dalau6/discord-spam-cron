const puppeteer = require('puppeteer'),
  fetch = require('node-fetch'),
  { id: id, password: password } = require('./auth.json');
(async () => {
  const a = await puppeteer.launch(),
    t = await a.newPage();
  await t.goto('https://discord.com/login'),
    await t.type('.inputDefault-_djjkz[name=email]', id),
    await t.type('.inputDefault-_djjkz[name=password]', password),
    await t.click('button.marginBottom8-AtZOdT'),
    await t.waitForNavigation(),
    await t.goto(
      'https://discord.com/channels/798398605614514196/798398605907460100'
    ),
    setInterval(async () => {
      const a = await fetch(
          'https://api.whatdoestrumpthink.com/api/v1/quotes/random'
        ),
        { message: e } = await a.json();
      await t.focus('[data-slate-zero-width=z]'),
        await t.type('[data-slate-zero-width=z]', e),
        await t.keyboard.press('Enter');
    }, 61e3);
})();
