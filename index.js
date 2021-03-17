const puppeteer = require('puppeteer'),
  { id, password } = require('./auth.json');
(async () => {
  const a = await puppeteer.launch(),
    e = await a.newPage();
  await e.goto('https://discord.com/login'),
    await e.type('.inputDefault-_djjkz[name=email]', id),
    await e.type('.inputDefault-_djjkz[name=password]', password),
    await e.click('button.marginBottom8-AtZOdT'),
    await e.waitForNavigation(),
    await e.goto(
      'https://discord.com/channels/798398605614514196/798398606377484298'
    ),
    setInterval(async () => {
      console.debug(new Date());
      await e.focus('[data-slate-zero-width=z]'),
        await e.type('[data-slate-zero-width=z]', '.'),
        await e.keyboard.press('Enter'),
        await e.keyboard.press('ArrowUp', { delay: 1e3 }),
        await e.keyboard.press('Backspace', { delay: 1e3 }),
        await e.keyboard.press('Enter', { delay: 1e3 }),
        await e.keyboard.press('Enter', { delay: 1e3 });
    }, 6e4);
})();
