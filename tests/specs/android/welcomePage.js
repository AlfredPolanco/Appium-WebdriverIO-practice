const { WelcomePage } = require('../../screenObjects/android/WelcomePage');
const { HomePage } = require('../../screenObjects/android/HomePage');

describe('Welcome Page', () => {
	it('Select a country', async () => {
		const welcomePage = new WelcomePage();
		await welcomePage.welcome();
		await welcomePage.clickOnUnitedKingdom();
		await welcomePage.tapOnContinueButton();
	});

	it('Check Homepage bottom menu', async () => {
		const homePage = new HomePage();
		await homePage.shopPage();
		await homePage.jdxPage();
		await homePage.wishlistPage();
		await homePage.morePage();
	});
});
