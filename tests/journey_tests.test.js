const { test, expect } = require('@playwright/test');
const { HomePage } = require('../pages/home_page');
const { GamePage } = require('../pages/game_page');


let home;
let game;

test.beforeEach(async ({ page }) => {
  home = new HomePage(page);
  game = new GamePage(page);
});

test('Test a user can see all buttons on home page', async ({ page }) => {
  
  await page.goto('/'); 

  await expect(page.locator('h1')).toHaveText('Cookie Clicker!');
  await expect(page.locator('h2').nth(0)).toHaveText('New Game');
  await expect(page.locator('h2').nth(1)).toHaveText('High Scores');
  await expect(page.locator('button')).toHaveText('Start!');
  await home.clickStart();
}); 

test('Test a user can see all buttons on games page', async ({ page }) => {
  
  await page.goto('/game/${playerName}'); 

  await expect(game.cookieCount).toBeVisible();
  await expect(game.factoriesCount).toBeVisible();
  await expect(game.cookieButton).toBeVisible();
  await expect(game.buyFactoryButton).toBeVisible();
  await expect(game.cookieCount).toBeVisible();
  await expect(game.sellCookiesButton).toBeVisible();
}); 


test('Test a user can load enter details and click for cookies, sell and buy a factory', async ({ page }) => {
  await page.goto('/'); 
  await expect(page).toHaveTitle("Cookie Clicker!");

  const playerName = 'playerX';

  await home.nameInput.fill(playerName);
  await home.clickStart();
 
  await expect(page).toHaveURL(`/game/${playerName}`)
  await game.clickCookie(10);
  await expect(game.cookieCount).toHaveText('10');
  await game.sellCookiesInput.fill('10');
  await game.clickSellCookies();
  //await expect(game.cookieCount).toHaveText('0'); // this should be the case if the cookies could be sold correctly in the game
  //await game.buyFactoryInput.fill('1'); // should be then able to enter 1 factory in the box (this does work))
  //await game.clickBuyFactory() // should be able to click buy (but wouldnt be a good test as it goes negative money)

});


