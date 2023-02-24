exports.HomePage = class HomePage {
	async shopPage() {
		const shopIcon = await $('//android.widget.TextView[@text="Shop"]');
		shopIcon.isDisplayed();
		// await expect(welcomeText).toHaveText('Welcome to');
	}

	async jdxPage() {
		const jdxIcon = await $('//android.widget.TextView[@text="JDX"]');
		jdxIcon.isDisplayed();
		// await expect(welcomeText).toHaveText('Welcome to');
	}

	async wishlistPage() {
		const wishListIcon = await $('//android.widget.TextView[@text="Wishlist"]');
		wishListIcon.isDisplayed();
		// await expect(welcomeText).toHaveText('Welcome to');
	}

	async morePage() {
		const moreIcon = await $('//android.widget.TextView[@text="More"]');
		moreIcon.isDisplayed();
		// await expect(welcomeText).toHaveText('Welcome to');
	}
};
