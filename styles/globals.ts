import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}
	
	:root {
		--background: #E5E5E5;
		--logo-board: #E5E4E2;

		--primary: #622EE5;
		--secondary: #778899;

		--dark-blue:#172765;
		--green: #69D531;
	}

	@media (max-width: 1080px) {
		html {
			font-size: 93.75%;
		}
	}

	@media (max-width: 720px) {
		html {
			font-size: 87.5%;
		}
	}

	@media (max-width: 1080px) {
		html {
			font-size: 93.75%;
		}
	}

	body {
		background-color: var(--background);
		color: var(--dark-blue);
	}

	body, 
	input, 
	textarea, 
	select, 
	button {
		font: 400 1rem 'Lato', sans-serif;
	}

	button {
		cursor: pointer;
	}

	a {
		color: inherit;
		text-decoration: none;
	}
`