import inquirer from 'inquirer';
import { getCLIConfigFile } from "generate-react-cli/src/utils/grcConfigUtils.js";
import { generateComponent } from "generate-react-cli/src/utils/generateComponentUtils.js";

const config = await getCLIConfigFile();

function create(whichFor, componentName) {
	const fixedCmd = {
		path: config.component[whichFor].path,
		type: whichFor,
		withStyle: config.component[whichFor].withStyle,
		withTest: config.component[whichFor].withTest,
		withStory: config.component[whichFor].withStory,
	}

	generateComponent(componentName, fixedCmd, config);
}


const input = await inquirer.prompt([
	{
		type: 'input',
		name: 'component_name',
		message: "Component name:",
	}
], null);

const componentName = input.component_name;
console.log('Creating WordPress PHP template component skeleton...')
create('wp-php', componentName);
console.log('Creating React component skeleton...')
create('react', componentName);
console.log('Done.')
