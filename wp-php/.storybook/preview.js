import '../src/common/global.scss';

/** @type { import('@storybook/server').Preview } */
const preview = {
	parameters: {
		actions: {argTypesRegex: "^on[A-Z].*"},
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i,
			},
		},
		server: {
			url: `https://localhost:5100`,
		},
	},
};

export default preview;
