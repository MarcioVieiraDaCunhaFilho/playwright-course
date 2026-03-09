import { test, expect } from '@playwright/test';

test('18 - Get by text', async ({ page }) => {
    await page.goto('FeedBackForm.html')

    const title = page.getByText('Feedback Form').first();
    await expect(title).toBeVisible()
})

test('18 - Get by text - error messages', async ({ page }) => {
    await page.goto('FeedBackForm.html')

    const emailValidationMessage = page.getByText('Invalid email format')
    await expect(emailValidationMessage).toBeHidden()

    await page.getByRole('textbox', {
        name:'email' 
    }).fill('jjasdij@gmail')
    await expect(emailValidationMessage).toBeVisible()

    await page.getByRole('textbox', {
        name:'email' 
    }).fill('jjasdij@gmail.com')
    await expect(emailValidationMessage).not.toBeVisible()
})

test('18 - Get by text - hidden features', async ({ page }) => {
    await page.goto('FeedBackForm.html')

    const hiddenButton = page.getByText('Hidden feature')
    await expect(hiddenButton).not.toBeVisible()

    const hiddenButtonText = await hiddenButton.textContent()
    console.log(hiddenButtonText)
})
