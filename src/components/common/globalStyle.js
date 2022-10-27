import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
	body {
	margin: 0;
	font-family: 'Poppins', sans-serif;
	font-weight: 400;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	background: #fff;
	}

	li {
		color:#4F5361;
		font-size:14px;
		font-weight:500;
		line-height:21px;
	}

	h3 {
		font-weight: 500;
		font-size: 18px;
		line-height: 27px;
		letter-spacing: 0.01em;
		color: #687691;
	}

	p {
		font-weight: 400;
		font-size: 18px;
		line-height: 32px;
		text-transform: capitalize;
		color: #5a6473;
	}

	h1 {
		font-style: normal;
		font-weight: 700;
		font-size: 64px;
		line-height: 76px;
		color:#000336;
	}


	button{
		font-weight: 600;
		font-size: 13px;
		line-height: 20px;
		text-align: center;
		color: #FFFFFF;
		background: #0f1b4c;
		border-radius: 5px;
		padding: 10px 16px;
	}

	button:hover, li:hover{
		opacity: 0.8;
	}

    li, img, button{
        user-select:none;
    }

	a{
		cursor: pointer;
	}

	#root{
		header > div, > section > div {
			margin: auto;
			max-width: 1440px;
		}
	}


    @media (max-width: 640px) {
        h1 {
            font-size: 42px;
            line-height: 56px;
        }
    }

    @media (max-width: 420px) {
        h1 {
            font-size: 36px;
            line-height: 42px;
        }
    }
`;
