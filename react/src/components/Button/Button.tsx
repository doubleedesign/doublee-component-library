import { FC } from 'react';
import { ButtonWrapper } from './Button.styled.ts';

interface ButtonProps {}

export const Button: FC<ButtonProps> = () => {

	return (
		<ButtonWrapper data-testid="Button">
			Button Element
		</ButtonWrapper>
	);
};

export default Button;

