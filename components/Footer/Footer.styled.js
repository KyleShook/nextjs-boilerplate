import styled from "styled-components";

export const Menu = styled.div`
	padding: 12px 0;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

export const Logo = styled.a`
	color: ${({ theme }) => theme.color};
	font-family: ${({ theme }) => theme.sansFont};
	font-size: 18px;
	font-weight: 600;
	text-decoration: none;
`;

export const MenuLinksContainer = styled.ul`
	display: flex;
`;

export const MenuLinks = styled.li`
	margin: 0 16px;
	font-family: ${({ theme }) => theme.sansFont};

	:last-child {
		margin-right: 0;
	}

	a {
		color: ${({ theme }) => theme.color};
		font-weight: 600;
		text-decoration-color: transparent;
		text-underline-offset: 4px;
		text-decoration-thickness: 2px;
		transition: 0.3s;
	}

	a:hover {
		text-decoration-color: black;
	}
`;
