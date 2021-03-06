import styled from "styled-components";

export const Container = styled.div<{ visibility: string }>`
	display: flex;
	align-items: center;
	color: var(--secondary);
	border-bottom: 1.5px solid var(--secondary); 
	width: 16rem;
	height: 3.4rem;
	cursor: pointer;
	transition: filter 0.3s;

	
	div {
		display: flex;
		align-items: center;
		gap: 0.25rem;
		
		> svg {
			margin: auto 0.5rem;
		}

		span {
			display: flex;
			align-items: flex-start;
			justify-content: flex-start;
			flex-direction: column;
			gap: 0.25rem;
	
			h4 {
				font-size: ${({ visibility }) => visibility === "false" ? "1.2rem" : "0.75rem"};
				color: ${({ visibility }) => visibility === "false" && "var(--primary)"};
			}
	
			p {
				color: var(--green);
				font-weight: 600;
				font-size: 1.2rem;
				display: ${({ visibility }) => visibility === "false" && "none"};
			}
		}
	}


	svg {
		font-size: 1.4rem;
	
		&:last-child {
			margin-right: 0.5rem;
			margin-left: auto;
		}
	}


	&:hover {
		filter: brightness(0.8);
	}
`