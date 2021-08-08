import styled from "styled-components"

export const Container = styled.div`
	display: flex;
	align-items: flex-start;
	flex-direction: column;
	
	span {
		margin: auto 1rem;
		font-size: 0.85rem;
		display: flex;
		align-items: center;

		gap: 1rem;
	}
`

export const DataInput = styled.div`
	display: flex;
	align-items: flex-start;
	flex-direction: column;
	position: relative;

	label {
		color: var(--primary);
		font-size: 0.85rem;
		position: absolute;
		top: 12px;
		left: 22.5px; 
	}

	select {
		border: none;
		border-bottom: 0.5px solid var(--primary);
		border-radius: 0.25rem 0.25rem 0 0;
		margin: 0.8rem 0;
		appearance: none;
		
		width: 16rem;
		height: 3.4rem;
  	padding: 0.9rem 1.5rem;
		
	}
	
	svg {
		position: absolute;
		bottom: 30px;
    left: 220px;
		font-size: 1.5rem;
	}
`

export const LoadingDiv = styled.div`
	animation: is-rotating 3s normal;
	width: 24px;
	height: 24px;
	border: 1.5px solid #172765;
	border-radius: 50%;
	border-top-color: var(--green);
	display: inline-block;

	@keyframes is-rotating {
		to {
			transform: rotate(3turn)
		}
	}
`