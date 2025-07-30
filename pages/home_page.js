class HomePage {

    constructor(page) {
      this.page = page;
      
      this.nameInput = page.locator("input[name='name']") //
      this.startButton = page.locator('button:has-text("Start")'); // add tags or ids to these buttons for uniformity
    }
  
    async clickStart() {
      await this.startButton.click();
    }
  
  }
  
  module.exports = { HomePage };