
const { test, expect } = require('@playwright/test');
// added line bellow so Drata dose not think we are a robot 
test.use({ userAgent: 'My user agentMozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36' });

test.describe('Drata Website UI Tests', () => {
    let page;
    let errors;

    // Open the website before each test
    test.beforeEach(async ({ browser }) => {
        page = await browser.newPage();
        errors = []
        // Listen for all console errors, add to errors array 
        page.on("console", (message) => {
            if (message.type() === 'error'){
                errors.push(message.text())
            }
        })
        await page.goto('https://www.drata.com');
        });

        test('Page - Auditors Element Existence', async () => {
            await page.getByRole("link", {name: "Auditors"}).first().click(); 
            // const solutionsLinkSelector = "//a[contains(., 'Auditors')]";
            // await expect (page.locator(solutionsLinkSelector).first()).toBeVisible();
            // await page.locator (solutionsLinkSelector).first().click()
            const auditorsHeadeSelector = "//h1[contains(., 'Streamline and Accelerate Your Audits')]";
            await expect (page.locator(auditorsHeadeSelector)).toBeVisible();
        });

        test('Page - Customer Element Existence', async () => {
            await page.getByRole("link", {name: "Customers"}).first().click();
            //const solutionsLinkSelector = "//a[contains(., 'Resources')]";
            //await expect (page.locator(solutionsLinkSelector)).toBeVisible();
            const resourcesHeadeSelector = "//h1[contains(., 'Trusted by the Best')]";
            await expect (page.locator(resourcesHeadeSelector)).toBeVisible();
        });

        // Test for home page for Console Errors
        test('Check home page for Console Errors', async () => {
            await page.waitForLoadState("domcontentloaded")
            await expect(errors).toEqual([], 'No console errors should be present');
        });
    });
