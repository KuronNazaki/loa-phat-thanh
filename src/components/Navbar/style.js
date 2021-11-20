import styled, { css } from 'styled-components';

import theme from '../../theme';
import { Wrapper, Container } from '../../containers/home/style';

const Wrap = styled.div`
	position: fixed;
	width: 100%;
	padding: 1.875em 0;
	z-index: 10;
	transition: background 0.3s ease-in, box-shadow 0.3s ease-in;

	${(props) =>
		props.visible &&
		css`
			background: black;
			box-shadow: 0.1px 3.9px 3.6px rgba(0, 0, 0, 0.022),
				0.3px 9.9px 9.1px rgba(0, 0, 0, 0.031),
				0.7px 20.2px 18.6px rgba(0, 0, 0, 0.039),
				1.5px 41.6px 38.3px rgba(0, 0, 0, 0.048),
				4px 114px 105px rgba(0, 0, 0, 0.07);
		`}
`;

const NavbarContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const MainLogo = styled.img``;

const NavbarWrapper = () => {
	return (
		<Wrap>
			<Wrapper>
				<Container></Container>
			</Wrapper>
		</Wrap>
	);
};

const NavBarContent = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;
