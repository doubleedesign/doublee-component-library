import {render, screen} from '@testing-library/vue'
import TemplateName from './TemplateName.vue'

test('renders TemplateName', async () => {
	render(TemplateName);

	const TemplateName = screen.getByTestId('TemplateName');

	expect(Button).toBeInTheDocument();
})
