import styled from "styled-components";
import { Logo } from "./common/logo";
import { ReactComponent as Facebook } from "../components/icons/facebook.svg";
import { ReactComponent as Twitter } from "../components/icons/twitter.svg";
import { ReactComponent as Linkedin } from "../components/icons/linkedin.svg";

const Wrapper = styled.footer`
	margin: auto;
	padding-top: 50px;
	max-width: 1440px;

	> section {
		margin: 55px 10px;
		display: grid;
		grid-template-columns: repeat(4, 1fr);

		h3 {
			margin-bottom: 42px;
			font-weight: 700;
			font-size: 20px;
			line-height: 24px;
			color: #1c1c1d;
			font-family: "Lato";
		}

		li {
			margin-bottom: 18px;
			button,
			a {
				font-weight: 400;
				font-size: 16px;
				line-height: 24px;
				background: #fff;
				color: #7a7a7e;
				padding: 0;
				border-radius: 0;
				text-align: initial;
			}
		}

		p {
			font-size: 16px;
			line-height: 28px;
			color: #7a7a7e;
		}

		.icon-list {
			display: flex;
			gap: 16px;
			margin-top: 40px;
			> span {
				background: #f9f9f9;
				display: block;
				height: 29px;
				width: 29px;
				display: flex;
				justify-content: center;
				align-items: center;
				cursor: pointer;

				&:hover {
					opacity: 0.8;
				}
			}
		}
	}

	> div {
		display: flex;
		justify-content: space-between;
		margin: 74px 10px 37px;
		align-items: center;

		p {
			font-weight: 400;
			font-size: 14px;
			color: #c2c2c2;
		}
	}

	@media (max-width: 640px) {
		> section {
			text-align: center;
			display: block;
			h3 {
				margin-top: 36px;
				margin-bottom: 21px;
			}
			li {
				display: inline-block;
				&:first-child {
					margin-right: 10px;
				}
				&:not(:first-child) {
					margin: 0 10px;
				}
			}

			.icon-list {
				margin-top: 20px;
				justify-content: center;
			}
		}

		> div {
			flex-direction: column;
			gap: 10px;
			margin-bottom: 10px;
		}
	}
`;

export const Footer = () => {
	return (
		<Wrapper>
			<section>
				<section>
					<h3>Product</h3>
					<ul>
						<li>
							<button>Listing</button>
						</li>
						<li>
							<button>Property</button>
						</li>
						<li>
							<button>Agents</button>
						</li>
						<li>
							<button>Blog</button>
						</li>
					</ul>
				</section>
				<section>
					<h3>Resources</h3>
					<ul>
						<li>
							<button>Our Homes</button>
						</li>
						<li>
							<button>Member Stories</button>
						</li>
						<li>
							<button>Video</button>
						</li>
						<li>
							<button>Free Trial</button>
						</li>
					</ul>
				</section>
				<section>
					<h3>Company</h3>
					<ul>
						<li>
							<button>Partnerships</button>
						</li>
						<li>
							<button>Terms of Use</button>
						</li>
						<li>
							<button>Privacy</button>
						</li>
						<li>
							<button>Sitemap</button>
						</li>
					</ul>
				</section>
				<section>
					<h3>Get In Touch</h3>
					<p>You'll find your next home, in any style you prefer.</p>
					<div className="icon-list">
						<span>
							<Facebook />
						</span>
						<span>
							<Twitter />
						</span>
						<span>
							<Linkedin />
						</span>
					</div>
				</section>
			</section>
			<div>
				<Logo />
				<p>Copyright 2022. All rights reserved.</p>
			</div>
		</Wrapper>
	);
};
