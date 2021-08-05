import styled from "styled-components";

export const Container = styled.section`
	position: relative;
	margin-left: auto;
	display: flex;
	gap: 1rem;

	> svg {
		position: absolute;
		bottom: 12px;
		left: 155px;
}
`

export const SearchButton = styled.input`
	display: flex;
	align-items: center;
	padding: 0.6rem 1rem 0.7rem 1.2rem;
	font-size: 0.9rem;

	border: 0.5px solid #778899;
	box-sizing: border-box;
	border-radius: 5px;
`

export const IconButton = styled.button`
	border: none;
	background: transparent;	
	transition: filter 0.4;

	&:hover {
		filter: contrast(0.7);
	}
`

export const ImageContainer = styled.div`
	border: 0.5px solid #4C77BF;
	padding: 1.2rem;
	border-radius: 50%;
`