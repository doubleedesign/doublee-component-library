import {join, dirname} from "path";

/**
 * This function is used to resolve the absolute path of a package.
 * It is needed in projects that use Yarn PnP or are set up within a monorepo.
 */
function getAbsolutePath(value) {
	return dirname(require.resolve(join(value, "package.json")));
}

/** @type { import('@storybook/server-webpack5').StorybookConfig } */
const config = {
	stories: ["../src/**/*.mdx", "../src/**/*.stories.@(json|yaml|yml)"],
	addons: [
		getAbsolutePath("@storybook/addon-links"),
		getAbsolutePath("@storybook/addon-essentials"),
		{
			name: '@storybook/addon-styling-webpack',
			options: {
				rules: [
					{
						test: /\.s[ac]ss$/i,
						use: [
							"style-loader",
							"css-loader",
							{
								loader: "sass-loader",
								options: { implementation: require.resolve("sass") }
							},
						],
					},
				]
			}
		}
	],
	framework: {
		name: getAbsolutePath("@storybook/server-webpack5"),
		options: {},
	},
	docs: {
		autodocs: "tag",
	},
};
export default config;
