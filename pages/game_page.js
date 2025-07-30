class GamePage {

  constructor(page) {
    this.page = page;
    this.cookieCount = page.locator('#cookies')
    this.factoriesCount = page.locator('#factories')
    this.cookieButton = page.locator('#click'); 
    this.buyFactoryButton = page.locator('#buy-factories');
    this.buyFactoryInput = page.locator('#factories-to-buy');
    this.sellCookiesButton = page.locator('#sell-cookies');
    this.sellCookiesInput = page.locator('#cookies-to-sell');

  }
  async clickBuyFactory() {
    await this.buyFactoryButton.click();
  }

  async clickSellCookies() {
    await this.buyFactoryButton.click();
  }

  async clickCookie(times = 1) {
    for (let i = 0; i < times; i++) {
      await this.cookieButton.click();
    }
  }

}

module.exports = { GamePage };