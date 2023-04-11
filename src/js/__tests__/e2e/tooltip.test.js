import puppeteer from 'puppeteer';

jest.setTimeout(60000);

describe('Inn Form', () => {
  let browser;
  let page;

  beforeEach(async () => {
    browser = await puppeteer.launch({
      headless: false,
      slowMo: 100,
      devtools: true,
    });

    page = await browser.newPage();
  });

  test('Form should render on page start', async () => {
    await page.goto('http://localhost:9000');

    await page.waitForSelector('.container');
  });

  test('tooltip show on page', async () => {
    await page.goto('http://localhost:9000');
    await page.waitForSelector('.container');
    const button = await page.$('.btn');
    await button.click();
    await page.waitForSelector('.tooltip');
  });

  afterEach(async () => {
    await browser.close();
  });
});
