exports.WelcomePage = class WelcomePage {
	async welcome() {
		const welcomeText = await $('//android.widget.TextView[@text="Welcome to"]');
		welcomeText.isDisplayed();
		await expect(welcomeText).toHaveText('Welcome to');
	}

	async clickOnUnitedKingdom() {
		const unitedKingdom = await $(
			'//android.widget.TextView[@text="United Kingdom"]'
		);
		unitedKingdom.click();
	}

	async tapOnContinueButton() {
		const continueButton = await $('//android.widget.Button[@text="Continue"]');
		continueButton.isEnabled();
		continueButton.click();
	}
};
