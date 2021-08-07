import styled from "styled-components";

export const Card = styled.div`
	position: relative;
	display: flex;
	align-items: center;
	justify-content: center;

	&:hover section {
		z-index: 10;
		opacity: 1;
		visibility: visible;
		transition: all 0.5s;
	}

	> section {
		transition: all 0.5s;
		opacity: 0;
		visibility: hidden;
		position: absolute;
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		justify-content: center;
		gap: 1rem;
		font-size: 1rem;
		
		width: 280px;
		height: 193px;
		top: 48px;
		left: 25px;
	
		background: linear-gradient(89.96deg, #F9F9F9 0.06%, #E5E4E2 99.94%);
		box-shadow: 0px 2px 20px rgba(44, 74, 125, 0.217548);
		border-radius: 0px 0px 5px 5px;
	
		div {
			width: 100%;
			margin-left: 1.2rem;
			display: flex;
			flex-direction: column;
			gap: 0.25rem;

			h4,
			span {
				font-weight: 600;
			}
		
			span {
				color: var(--green);
			}
		}

	
		button {
			border: none;
			border-radius: 0.5rem;
			display: flex;
			align-items: center;
			justify-content: center;
			color: #ffffff;
			background: var(--primary);
			font-weight: 700;
			text-transform: uppercase;
			padding: 0.8rem 2rem;
			transition: filter 0.2s;
			margin-left: 1.2rem;
	
			&:hover {
				filter: brightness(0.8);
			}
		}
	}
	
`