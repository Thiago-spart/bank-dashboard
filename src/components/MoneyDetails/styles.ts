import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	align-items: center;
	gap: 0.5rem;
`

const imgPallet = [
	"#622EE5",
	"#778899",
	"#FF354E",
]

export const ImgContainer = styled.div<{ imgTheme: number }>`
	display: flex;
	align-items: center;
	justify-content: center;
	background: linear-gradient(135deg, ${({ imgTheme }) => imgPallet[imgTheme - 1]} 0%, var(--dark-blue) 100%);
	color: var(--white);
	border-radius: 50%;
	width: 36px;
	height: 36px;
	padding: 0.8rem;
	margin: auto 0.4rem auto 0.8rem;
	text-transform: uppercase;
`


export const DetailContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.15rem;
`

export const Title = styled.span<{ TitleSize?: string }>`
	display: flex;
	align-items: center;
	text-transform: capitalize;
	font-size: ${({ TitleSize }) => TitleSize + "px"};

	> svg {
		margin-left: 0.5rem;
		cursor: pointer;
	} 
`

export const Amount = styled.span<{ AmountSize: string, visibility: boolean }>`
	color: var(--green);
	visibility: ${({ visibility }) => visibility && "hidden"};
	font-weight: 600;
	font-size: ${({ AmountSize }) => AmountSize + "px"};
`