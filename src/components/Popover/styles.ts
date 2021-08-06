import styled from "styled-components";

export const Container = styled.div<{ messageSize: string }>`
	position: relative;
	display: inline-block;

	&:hover span {
		z-index: 10;
		opacity: 1;
		visibility: visible;
		transition: all 0.5s;
	}

	span {
		opacity: 0;
		visibility: hidden;
		position: absolute;
    left: 0;
    bottom: 110%;
		background-color: #ffffff;
    padding: ${({ messageSize }) => messageSize === "big" ? "0.5rem 1.5rem" : "0.5rem"};
    display: flex;
    gap: 0.25rem;
    font-size: 0.8rem;
    border-radius: 0.25rem;
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.15);

		> svg {
			font-size: 1rem;
		}

		&:before {
			position: absolute;
			z-index: 1;
			content: "";
			right: calc(80% - 10px);
			bottom: -8px;
			border-style: solid;
			border-width: 10px 10px 0 10px;
			border-color: #ffffff transparent transparent transparent;
			transition-duration: 0.3s;
			transition-property: transform;
		}
	}
`