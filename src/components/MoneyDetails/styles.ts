import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.15rem;
`

export const Title = styled.span<{ TitleSize: string }>`
	display: flex;
	align-items: center;
	font-size: ${({ TitleSize }) => TitleSize + "px"};

	> svg {
		margin-left: 0.5rem;
	} 
`

export const Amount = styled.span<{ AmountSize: string }>`
	color: var(--green);
	font-weight: 600;
	font-size: ${({ AmountSize }) => AmountSize + "px"};
`