import { FC } from 'react';
import { TemplateNameWrapper } from './TemplateName.styled.ts';

interface TemplateNameProps {}

export const TemplateName: FC<TemplateNameProps> = () => {

	return (
		<TemplateNameWrapper data-testid="TemplateName">
			TemplateName Element
		</TemplateNameWrapper>
	);
};

export default TemplateName;

