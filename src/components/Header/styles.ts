import styled from "styled-components";

export const Container = styled.header`
	background: #ffffff;
	height: 5rem;
`

export const ContainerContent = styled.header`
	max-width: 1120px;
	height: 5rem;
	margin: 0 1rem;
	padding: 0 2rem;
	position: relative;
	gap: 2rem;
	display: flex;
	align-items: center;
	`

export const Logo = styled.div`
	&::after {
		content: '';
		height: 40%;
		position: absolute;
		bottom: 25px;
		left: 170px;
		border-right: 1px solid var(--logo-board);
	}
	width: 130px;
`