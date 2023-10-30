import { Button as ButtonComponent } from './Button';
import { Meta, StoryObj } from '@storybook/react';
import theme from '@theme.json';

const meta: Meta<typeof ButtonComponent> = {
	component: ButtonComponent,
	// Override the type of control for props if needed here
	argTypes: {
		example: {
			options: Object.keys(theme.colours),
			control: { type: 'select' }
		}
	}
};

type Story = StoryObj<typeof ButtonComponent>;

export const Button: Story = {
	// Add default prop values
	args: {
	},
};

export default meta;
