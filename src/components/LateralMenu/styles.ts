import styled from "styled-components";

export const NavBar = styled.nav`
	display: flex;
	flex-direction: column;
	align-items: center;
	position: relative;
	gap:0.25rem;
	height: 90vh;
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`

export const NavStyles = styled.span`
	position: relative;
`

export const NavLink = styled.a<{ isActive: boolean, isSelected?: boolean }>`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 2.9rem;
	height: 3rem;
	background: ${({ isSelected }) => isSelected ? 'var(--primary)' : '#ffffff'};
	color: ${({ isSelected }) => isSelected && '#ffffff'};
	

	&::before {
		position: absolute;
		z-index: 1;
		content: "";
		right: calc(23% - 10px);
		bottom: -4px;
		border-style: solid;
		border-width: 4px 0 0 4px;
		border-color: ${({ isSelected }) => isSelected ? 'var(--primary)' : 'transparent'} transparent transparent transparent;
	}

	&::after {
		position: absolute;
		z-index: 1;
		content: "";
		right: calc(23% - 10px);
		top: -4px;
		border-style: solid;
		border-width: 0 0 4px 4px;
		border-color: transparent transparent ${({ isSelected }) => isSelected ? 'var(--primary)' : 'transparent'} transparent;
	}
`