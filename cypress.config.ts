import { defineConfig } from 'cypress';

export default defineConfig({
	e2e: {
		setupNodeEvents(on, config) {
			// implement node event listeners here
		},
		specPattern: 'test/e2e/**/*.cy.{js,jsx,ts,tsx}',
		supportFile: 'test/setting/support/e2e.{js,jsx,ts,tsx}',
		videosFolder: 'test/setting/videos',
		downloadsFolder: 'test/setting/downloads',
		screenshotsFolder: 'test/setting/screenshots',
	},

	component: {
		devServer: {
			framework: 'next',
			bundler: 'webpack',
		},
		indexHtmlFile: 'test/setting/support/component-index.html',
		specPattern: 'test/components/**/*.cy.{js,jsx,ts,tsx}',
		supportFile: 'test/setting/support/component.{js,jsx,ts,tsx}',
		videosFolder: 'test/setting/videos',
		downloadsFolder: 'test/setting/downloads',
		screenshotsFolder: 'test/setting/screenshots',
	},
});
