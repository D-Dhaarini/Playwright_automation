import { test, expect } from '@playwright/test';

test.beforeEach('navigating to the website', async ({page}) => {
    // Step 1: Launch Browser
    // const browser = await chromium.launch({ headless: false }); // Set headless: true for headless mode
    // const context = await browser.newContext();
    // const page = await context.newPage();

    // Step 2: Navigate to Landing Page
    await page.goto('http://127.0.0.1:5500/dev/landing.html');
     // Replace with your local or hosted URL
     await expect(page.getByRole('heading', { name: 'Welcome to the Insurance Portal'})).toBeVisible();
    console.log('Navigated to Landing Page');
});
test('Signup',async({page})=>{
  await page.click('text=Signup');
console.log('Navigated to Signup Page');

// Step 4: Perform Login
await page.fill('#email', 'testuser@example.com'); // Replace with valid test credentials
await page.fill('#password', 'password123');
await page.click('button[type="submit"]')
page.on('dialog', async dialog => {
  console.log(`Dialog message: ${dialog.message()}`);
  await dialog.accept();

})
console.log('user registered successfully');
});
    // Step 3: Click on Login
    test('login success',async({page})=>{
      await page.click('text=Login');
    console.log('Navigated to Login Page');
  
    // Step 4: Perform Login
    await page.fill('#email', 'testuser@example.com'); // Replace with valid test credentials
    await page.fill('#password', 'password123');
    await page.click('button[type="submit"]');
    page.on('dialog', async dialog => {
      console.log(`Dialog message: ${dialog.message()}`);
      await dialog.accept();
    
    })
    console.log('Logged in successfully');
    });
    // Step 5: Navigate to Dashboard
//     await page.waitForNavigation();
//     console.log('Navigated to Dashboard');

//     // Step 6: Create a New Policy
//     await page.fill('#policyName', 'Test Policy');
//     await page.fill('#policyDetails', 'This is a test policy description.');
//     await page.click('button[type="submit"]');
//     console.log('Policy created successfully');

//     // Step 7: Verify Policy is Added
//     const policyExists = await page.locator('text=Test Policy').isVisible();
//     if (policyExists) {
//         console.log('Policy verified successfully');
//     } else {
//         console.error('Policy verification failed');
//     }

//     // Step 8: Close Browser
//     await browser.close();
// })();