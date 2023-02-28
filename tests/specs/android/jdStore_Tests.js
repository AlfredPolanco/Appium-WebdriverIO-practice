const { WelcomeScreen } = require('../../screenObjects/android/WelcomeScreen');
const { HomeScreen } = require('../../screenObjects/android/HomeScreen');

describe('JD Store Tests', () => {
	it('Select a country', async () => {
		const welcomeScreen = new WelcomeScreen();
		await welcomeScreen.welcome();
		await welcomeScreen.clickOnUnitedKingdom();
		await welcomeScreen.tapOnContinueButton();
	});

	it('Check Home screen bottom menu', async () => {
		const homeScreen = new HomeScreen();
		await homeScreen.shopPage();
		await homeScreen.jdxPage();
		await homeScreen.wishlistPage();
		await homeScreen.morePage();
	});
});
