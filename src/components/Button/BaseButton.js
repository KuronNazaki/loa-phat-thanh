import styled from 'styled-components';

import theme from '../../theme';

const BaseButton = styled.button`
	cursor: pointer;
	background: none;
	border: ${(props) => props.border};
	font-size: 18px;
	font-weight: 700;
	color: ${(props) => props.color};
	border-radius: 20px;
	padding: ${(props) => props.padding};
`;

BaseButton.defaultProps = {
	border: 'none',
	color: theme.white,
	padding: '0',
};

export default BaseButton;
