An experiment in creating components that work across tech stacks that I will eventually use in freelance and personal projects. A learning exercise across stacks, incl. using Storybook and various kinds of automated testing. 

## Generating new components
From the project root, run `npm run generate` to run a script to generate skeleton files for a new component in every component set, including the component itself, styling files, test files etc as relevant.

This functionality uses [generate-react-cli](https://github.com/arminbro/generate-react-cli) under the hood. Template files are located in the `_generator-templates` folder in the project root, and are configured for use in `generate-react-cli.json`.

## The component sets and developing with Storybook

### WP-PHP
A set of components intended for use in my [custom WordPress themes](https://github.com/doubleedesign/doublee-dev-starter-kit).

The PHP development server needs to be running to work on this set of components in Storybook. A script is set up to do this when run from the project root. Use the commands `npm run dev:php` and `npm run storybook:php` to work with this component set.

There are headers included in each component file to get around CORS issues that would otherwise occur when Storybook tries to access this dev server. This should be removed when copying the components into an actual WordPress theme.

The server script expects the PHP executable to be located at `C:/php/php.exe`. (Yeah, I use Windows. Not sorry.) Update according to your needs.

#### Using with WordPress

**TODO**: Add instructions, incl. how to do admin and editor CSS.

### React
A set of React components. **TODO**: Info.

### Vue
A set of Vue components. **TODO**: Info.

## Testing

**TODO**.
