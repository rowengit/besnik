import styled from "styled-components";
import newsletter from "../img/newsletter.png";

const Wrapper = styled.section`
	display: flex;
	justify-content: center;
	> section {
		background: #063183;
		height: 370px;
		margin: 0 165px !important;
		border-radius: 10px;
		max-width: 1110px;
		width: 100%;

		position: relative;

		display: flex;
		align-items: center;

		> div {
			align-items: center;
			margin-left: 80px;

			h2 {
				color: #ffffff;
			}

			p {
				font-size: 16px;
				line-height: 30px;
				color: #ffffff;
				opacity: 0.75;
				margin: 15px 0 20px;
			}

			button {
				font-weight: 500;
				color: #002366;
				background: #ffffff;
			}
		}

		> img {
			position: absolute;
			top: -37px;
			right: 221px;
			transition: right 0.25s linear;
		}

		@media (max-width: 1250px) {
			> img {
				right: 5vw;
			}
		}
	}

	@media (max-width: 1100px) {
		background: #063183;
		> section {
			justify-content: center;
			margin: 0 !important;
			border-radius: 0px;
			> img {
				display: none;
			}

			> div {
				margin: 0;
			}
		}
	}
`;

export const Bottom = () => {
	return (
		<Wrapper>
			<section>
				<div>
					<h2>Featured Properties</h2>
					<p>Everything you need to know when you're looking</p>
					<button>Get Started Now</button>
				</div>
				<img src={newsletter} alt="newsletter" />
			</section>
		</Wrapper>
	);
};
