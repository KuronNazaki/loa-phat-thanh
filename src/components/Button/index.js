import BaseButton from './BaseButton';

const ButtonWrapper = (Component, props) => {
	const { children, ...rest } = props;
	return <Component {...rest}>{children}</Component>;
};

const Button = (props) => ButtonWrapper(BaseButton, props);

export { Button };
