import styled from "styled-components";

export const NavBar = styled.nav`
	display: flex;
	flex-direction: column;
	align-items: center;
	position: absolute;

	&:first-child {
		margin-top: 0.25rem;
	}
`

export const NavLink = styled.a`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 2.9rem;
	height: 3rem;

	&:active {
		background-color: var(--primary);
	}

	&:active::before {
		border-color: var(--primary) transparent transparent transparent;
	}

	&:active::after {
		border-color: transparent transparent var(--primary) transparent;
	}

	&::before {
		position: absolute;
		z-index: 1;
		content: "";
		right: calc(23% - 10px);
		bottom: -4px;
		border-style: solid;
		border-width: 4px 0 0 4px;
		border-color: transparent transparent transparent transparent;
	}

	&::after {
		position: absolute;
		z-index: 1;
		content: "";
		right: calc(23% - 10px);
		top: -4px;
		border-style: solid;
		border-width: 0 0 4px 4px;
		border-color: transparent transparent transparent transparent;
	}
`