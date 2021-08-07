import styled from "styled-components";

export const Container = styled.section`
	display: flex;
	align-items: center;
	width: 2500px;
	height: 3rem;
	box-shadow: 4px 4px 6px rgba(0, 0, 0, 0.25);

	& > button {
		margin-right: 1rem;
	}
`

const Button = styled.button`
	background: linear-gradient(135deg, #FFFFFF 0%, #E5E4E2 100%);
	border-radius: 50%;
	border: none;
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 0.5rem;
	margin: auto 0.8rem;
`

export const WalletButton = styled(Button)`
	
`

export const NewWalletButton = styled(Button)`
	
`