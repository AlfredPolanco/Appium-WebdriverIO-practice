const { WelcomePage } = require("../../pages/welcomePage");

describe('Sample', ()=> {
    it('Sample test', async () => {
        const welcomePage = new WelcomePage();
        await welcomePage.welcome();
        await welcomePage.clickOnUnitedKingdom();
        await welcomePage.tapOnContinueButton();
    });
});