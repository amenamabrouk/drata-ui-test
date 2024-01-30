const { test, expect } = require('@playwright/test');

// Set user agent to avoid being detected as a robot
test.use({ userAgent: 'My user agentMozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36' });

test.describe('Drata Website UI Tests', () => {
    let page;
    let errors;

    // Open the website before each test
    test.beforeEach(async ({ browser }) => {
        // Create a new page for each test
        page = await browser.newPage();
        errors = [];

        // Listen for all console errors and add them to the errors array
        page.on("console", (message) => {
            if (message.type() === 'error'){
                errors.push(message.text());
            }
        });

        // Navigate to the Drata website
        await page.goto('https://www.drata.com');
    });

    // Test: Check the existence of the "Auditors" page element
    test('Page - Auditors Element Existence', async () => {
        // Click on the "Auditors" link
        await page.getByRole("link", {name: "Auditors"}).first().click();

        // Define a selector for the auditors header
        const auditorsHeaderSelector = "//h1[contains(., 'Streamline and Accelerate Your Audits')]";

        // Expect the auditors header to be visible
        await expect(page.locator(auditorsHeaderSelector)).toBeVisible();

        // Capture a screenshot with a timestamp
        await page.screenshot({path:'/Users/amenamabrouk/Desktop/drata/screenshots/'+ `AuditorPage-${new Date().toDateString()}.png`});
    });

    // Test: Check the existence of the "Customers" page element
    test('Page - Customer Element Existence', async () => {
        // Click on the "Customers" link
        await page.getByRole("link", {name: "Customers"}).first().click();

        // Define a selector for the customers header
        const customersHeaderSelector = "//h1[contains(., 'Trusted by the Best')]";

        // Expect the customers header to be visible
        await expect(page.locator(customersHeaderSelector)).toBeVisible();

        // Capture a screenshot with a timestamp
        await page.screenshot({path:'/Users/amenamabrouk/Desktop/drata/screenshots/'+ `CustomersPage-${new Date().toDateString()}.png`});
    });

    // Test: Check the home page for console errors
    test('Check home page for Console Errors', async () => {
        // Wait for the DOM to be fully loaded
        await page.waitForLoadState("domcontentloaded");

        // Expect no console errors to be present
        await expect(errors).toEqual([], 'No console errors should be present');
    });
});