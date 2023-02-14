// eslint-disable-next-line import/no-anonymous-default-export
export default {
	clearMocks: true,
	collectCoverage: true,
	coverageDirectory: 'test/.setting/coverage',
	coverageProvider: 'v8',
	testMatch: ['**/test/unitary/**/*.[jt]s?(x)'],
	testPathIgnorePatterns: [
		'<rootDir>/test/.setting',
		'<rootDir>/test/e2e',
		'<rootDir>/test/components',
	],
};
