import styled from "styled-components";

export const Container = styled.section`
	display: flex;
	flex-direction: column;
	gap: 2rem;
	margin: 2.5rem 2rem;
	position: relative;
`

export const TitleDiv = styled.div`
	display: flex;
	gap: 1rem;
	align-items: center;
`

export const Bottom = styled.button`
	border: 1px solid var(--primary);
	width: 5rem;
	height: 2.5rem;
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 0.25rem;
	font-size: 1.6rem;
	color: var(--primary);
	background-color: transparent;
	transition: all 0.4s;

	&:hover,
	&:active {
		background: linear-gradient(270deg, var(--primary) 0%, #A683FF 100%);
		color: var(--white);
	} 

`

export const DropdownContainer = styled.div`
	position: relative;
`

export const DropdownContent = styled.ul<{ isDropdownOpen: boolean }>`
	display: ${({ isDropdownOpen }) => (isDropdownOpen ? "flex" : "none")};
	z-index: 10;
	flex-direction: column;
	position: absolute;
	top: 42px;
  left: 0px;
	width: 164px;
	height: 108px;
	list-style: none;
	background: var(--white);
	border-radius: 5px;
  padding: 0.5rem 1rem;
	box-shadow: 0px 2px 20px rgba(44, 74, 125, 0.217548);

	li {
		display: flex;
		flex-direction: column;
		transition: filter 0.4s;
		align-items: flex-start;
		justify-content: center;
		cursor: pointer;

		&:hover {
			filter: contrast(0.5);
		}

		p {
			font-size: 0.85rem;
			margin: 6.5px 0rem; 
		}
	}

`