import styled from "styled-components";

export const Container = styled.div`
	gap: 0.5rem; 
	display: flex;
	flex-direction: column;
	position: relative;
`

export const DropdownCard = styled.ul<{ isDropdownOpen: boolean }>`
	display: ${({ isDropdownOpen }) => (isDropdownOpen ? "flex" : "none")};
	flex-direction: column;
	position: absolute;
	bottom: -175px;
  left: -145px;
	width: 280px;
	height: 193px;
	list-style: none;
	background: #ffffff;
	border-radius: 5px;
	overflow-y: scroll;
  padding: 0.5rem 1rem;
	box-shadow: 0px 2px 20px rgba(44, 74, 125, 0.217548);
	gap: 0.25rem;

	li {
		display: flex;
		flex-direction: column;

		h3 {
			font-size: 0.85rem;
		}

		span {
			color: var(--primary);
			font-size: 0.65rem;
			line-height: 0.8rem;
		}
	}
`

export const AccountTitle = styled.button`
	margin-right: auto;	
	font-size: 1rem;
	cursor: pointer;
	border: none;
	background: transparent;

	> svg {
		margin-left: 0.5rem;
	}
`

export const AccountDetails = styled.div`
	display:flex;
	gap: 0.5rem;
	align-items: center;
`

export const Button = styled.button`
	border: none;
	background: transparent;
	color: var(--primary);
	font-size: 0.85rem;
`

export const CopyDiv = styled(Button)`
	color: var(--dark-blue);
`