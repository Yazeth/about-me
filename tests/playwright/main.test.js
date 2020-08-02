import playwright from 'playwright';

describe('main test', () => {
  it('runs this', async () => {
    const browser = await playwright['chromium'].launch({headless: false});
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('https://google.com/');
  });
});