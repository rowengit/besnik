import { Logo } from "./common/logo";
import styled from "styled-components";
import House from "../img/house.png";

const Wrapper = styled.header`
	background: #e6f0ff;

	div {
		.header {
			display: flex;
			padding-top: 46px;
			padding-left: 56px;

			ul {
				margin-left: 65px;
				display: flex;

				li {
					margin: 0 15px;
				}
			}

			@media (max-width: 640px) {
				flex-direction: column;
				padding-left: 0;

				> img {
					margin: auto;
					margin-bottom: 23px;
				}

				> ul {
					width: 100%;
					justify-content: center;
					overflow: scroll;
					margin: auto;
					margin-bottom: 13px;
					padding-bottom: 10px;
				}
			}

			@media (max-width: 402px) {
				> ul {
					width: 100%;
					justify-content: left;
				}
			}
		}

		.banner {
			display: flex;
			justify-content: center;
			margin: auto;

			> div {
				&:first-child {
					padding: 4.6vw;
					margin: auto 0;

					h3 {
						margin-bottom: 8px;
					}

					h1 {
						white-space: nowrap;
						transition: font-size 0.25s linear;
					}

					h1 + p {
						margin-top: 30px;
					}

					button {
						margin-top: 40px;
					}
				}

				&:last-child {
					width: auto;

					img {
						transition: visibility 0s, opacity 0.5s linear;
						width: 100%;
						height: 100%;
						object-fit: contain;
						visibility: visible;
						opacity: 1;
					}
				}
			}

			@media (max-width: 1000px) {
				> div {
					&:first-child {
						min-width: calc(100% - 112px);
					}
					&:last-child > img {
						width: 0px;
						visibility: hidden;
						opacity: 0;
					}
				}
			}
		}
	}
`;

export const Header = () => {
	return (
		<>
			<Wrapper>
				<div>
					<section className="header">
						<Logo />
						<ul>
							<li>Home</li>
							<li>Features</li>
							<li>Service</li>
							<li>Listed</li>
							<li>Contact</li>
						</ul>
					</section>
					<section className="banner">
						<div>
							<h3>Welcome to Besnik Agency</h3>
							<h1>Discover a place</h1>
							<h1>you'll love to live.</h1>
							<p>
								Get the best real estate deals first, before
								they hit the mass
							</p>
							<p>
								market! hot foreclosure deals with one simple
								search
							</p>
							<button>More About Us</button>
						</div>
						<div>
							<img src={House} alt="House" />
						</div>
					</section>
				</div>
			</Wrapper>
		</>
	);
};
