import styled from 'styled-components'

export const Container = styled.div<{ visible: string }>`
	display: ${({ visible }) => visible === "false" ? "none" : "flex"};
	position: absolute;
	width: 1266px;
	height: 68px;
	left: -78.5px;
	top: 480.5px;
	background: var(--white);
	z-index: 10;
	gap: 1.2rem;
	align-items: center;

	svg {
		color: var(--dark-blue);
	}

	> span {
		margin-left: 1.5rem;
		display: flex;
		gap: 0.5rem;

		&::after {
		content: '';
		height: 50%;
		position: absolute;
		bottom: 18px;
		left: 195px;
		border-right: 1px solid var(--logo-board);
		}
	}
`

export const Button = styled.button`
	width: 24px;
	height: 67px;
	display: flex;
	align-items: center;
	justify-content: center;
	background: transparent;
	border: none;

	svg {
		font-size: 24px;
	}

	&:last-child {
		margin-left: auto;
		margin-right: 5%;
	}
`