import { ReactComponent as Arrow } from "./icons/arrow.svg";
import line from "../img/line.png";
import rent from "../img/rent.png";
import buyer from "../img/buyer.png";
import seller from "../img/seller.png";
import styled from "styled-components";

const Wrapper = styled.section`
	> div {
		position: relative;
		text-align: center;

		.line {
			position: absolute;
			left: 50%;
			transform: translate(-50%, -10px);
		}

		h2,
		h3 {
			white-space: nowrap;
		}

		h2 {
			margin-bottom: 20px;
		}

		h3 {
			font-weight: 500;
			font-size: 20px;
			line-height: 22px;
			color: #3b3c45;

			margin-top: 26px;
		}

		> p {
			font-weight: 400;
			font-size: 16px;
			line-height: 30px;
			color: #5a6473;
			max-width: 459px;
			margin: auto;
			padding: 0 10px;
		}

		.list {
			display: flex;
			justify-content: center;
			margin: 70px 0 50px 0;
			> div {
				margin: auto 70px;
			}

			a {
				font-weight: 600;
				font-size: 14px;
				line-height: 31px;
				text-align: center;
				color: #0689ff;
			}
		}

		@media (max-width: 900px) {
			.list {
				> div {
					margin: auto;
				}
			}
		}

		@media (max-width: 420px) {
			.list {
				width: 100%;
				display: inline-block;
				margin-left: auto;
				margin-right: auto;
				> div {
					margin-bottom: 50px;
				}
			}
		}
	}
`;

export const Guide = () => {
	return (
		<Wrapper>
			<div>
				<img className="line" src={line} />
				<h2>How its works?</h2>
				<p>
					Everything you need to know when you're looking to buy,
					rent, or sell - all in one place.
				</p>
				<div className="list">
					<div>
						<img src={buyer} alt="buyer" />
						<h3>Buyer Guides</h3>
						<a>
							How to buy <Arrow />
						</a>
					</div>
					<div>
						<img src={rent} alt="rent" />
						<h3>Renter Guides</h3>
						<a>
							How to rent <Arrow />
						</a>
					</div>
					<div>
						<img src={seller} alt="seller" />
						<h3>Seller Guides</h3>
						<a>
							How to sell <Arrow />
						</a>
					</div>
				</div>
				<button>Sell Full Guidelines</button>
			</div>
		</Wrapper>
	);
};
