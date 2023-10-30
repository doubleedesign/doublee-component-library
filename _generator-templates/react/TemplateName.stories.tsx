import { TemplateName as TemplateNameComponent } from './TemplateName';
import { Meta, StoryObj } from '@storybook/react';
import theme from '@theme.json';

const meta: Meta<typeof TemplateNameComponent> = {
	component: TemplateNameComponent,
	// Override the type of control for props if needed here
	argTypes: {
		example: {
			options: Object.keys(theme.colours),
			control: { type: 'select' }
		}
	}
};

type Story = StoryObj<typeof TemplateNameComponent>;

export const TemplateName: Story = {
	// Add default prop values
	args: {
	},
};

export default meta;
