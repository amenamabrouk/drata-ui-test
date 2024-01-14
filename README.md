# Playwright UI Testing Suite for Drata

This repository contains a Playwright-based UI Testing Suite for Drata's website.

## Testing Objectives

1. Check for each page on this website
2. Assert a page element exists on each page
3. Assert that there are no browser console errors on page load
4. Add a Report when the test is completed to show the number of Passing/Failing cases

## Acceptance Criteria

1. The code is delivered via GitHub
2. There’s documentation on how to run the testing suite
3. The testing suite can be run locally
4. All tests pass with Report

## How to Run the Testing Suite

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) installed on your machine.

### Commands

#### For Mac:

1. Open Terminal.

2. To run the tests, use the following command:

   ```bash
   npx playwright test
   ```

3. To display the HTML report, run:

   ```bash
   npx playwright show-report
   ```

#### For Windows:

1. Open Command Prompt or PowerShell.

2. To run the tests, use the following command:

   ```bash
   npx playwright test
   ```

3. To display the HTML report, run:

   ```bash
   npx playwright show-report
   ```

## Notes

While the tests are intended to pass, be aware that there may be console errors causing some tests to fail. Please refer to the generated report for details.
