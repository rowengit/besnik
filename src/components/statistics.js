import styled from "styled-components";
import statiHouse from "../img/statiHouse.png";
import growth from "../img/growth.png";

import people1 from "../img/people1.png";
import people2 from "../img/people2.png";
import people3 from "../img/people3.png";
import people4 from "../img/people4.png";
import people5 from "../img/people5.png";
import people6 from "../img/people6.png";
import people7 from "../img/people7.png";
import people8 from "../img/people8.png";
import people9 from "../img/people9.png";
import people10 from "../img/people10.png";

import line from "../img/line.png";

const Wrapper = styled.section`
	margin-top: 125px;
	margin-bottom: 103px;

	> div > div {
		:first-child {
			display: flex;
			justify-content: center;
			align-items: center;
			gap: 120px;
			transition: gap 0.25s linear;

			.right {
				position: relative;

				> img {
					height: 460px;
					width: 400px;
					border-radius: 10px;
					margin-left: 120px;
				}

				.info {
					position: absolute;
					top: 0;
					background: #fff;
					border-radius: 0 0 10px;
					padding: 45px 21px 0 21px;

					max-width: 197px;
					> div:first-child {
						display: flex;
						justify-content: space-between;
						align-items: center;

						h3 {
							font-weight: 700;
							font-size: 26px;
							line-height: 26px;
							letter-spacing: 0.01em;
							color: #000339;
						}
					}

					p {
						margin-top: 8px;
						font-weight: 400;
						font-size: 12px;
						line-height: 18px;
						color: #a7a7a7;
					}

					> div:last-child {
						display: flex;
						position: relative;
						height: 32px;
						border-top: 1px solid #e9e9e9;
						padding: 23px 21px;
						margin-top: 26px;
					}
				}
			}

			.left {
				width: 326px;

				h2 {
					line-height: 45px;
					margin-bottom: 20px;
					margin-top: 10px;
				}

				p {
					font-weight: 400;
					font-size: 16px;
					line-height: 30px;
					color: #5a6473;
				}
			}
		}

		:last-child {
			display: flex;
			margin-top: 110px;
			justify-content: center;
			gap: 120px;
			transition: gap 0.25s linear;
			p {
				font-weight: 500;
				font-size: 18px;
				line-height: 27px;
				color: #7b8087;
			}
		}

		@media (max-width: 1000px) {
			:first-child {
				gap: 5vw;
			}
		}

		@media (max-width: 900px) {
			:first-child {
				flex-direction: column;
			}

			:last-child {
				gap: 6vw;
			}
		}

		@media (max-width: 550px) {
			:first-child {
				.right > img {
					width: calc(100% - 140px);
					height: auto;
				}
			}

			:last-child {
				flex-direction: column;
				margin-top: 55px;
				align-items: center;

				> div {
					width: 200px;
				}
			}
		}
	}

	@media (max-width: 550px) {
		margin-top: 63px;
	}
`;

const Img = styled.div`
	background-image: url(${p => p.Img});
	width: 17px;
	height: 17px;
	border-radius: 50%;
	background-position: center center;
	background-repeat: no-repeat;
	background-size: cover;
	position: absolute;
	left: ${props => props.Left};
`;

const imgList = [
	people1,
	people2,
	people3,
	people4,
	people5,
	people6,
	people7,
	people8,
	people9,
	people10
];

export const Statistics = () => {
	const imgRows = imgList.map((img, idx) => {
		const divide = Math.floor(idx / 3);

		return (
			<Img
				Img={img}
				Left={`${(idx + divide) * 15}px`}
				key={`people${idx + 1}`}
			/>
		);
	});

	return (
		<Wrapper>
			<div>
				<div>
					<div className="right">
						<img src={statiHouse} alt="statiHouse" />
						<div className="info">
							<div>
								<h3>40,000+</h3>
								<img src={growth} alt="growth" />
							</div>
							<p>
								By average for 2 bedroom apartments in San
								Francisco, CA
							</p>
							<div>{imgRows}</div>
						</div>
					</div>

					<div className="left">
						<img src={line} alt="line" />
						<h2>You've found a neighborhood you love.</h2>
						<p>
							When you own a home, you're committing to living in
							one location for a while. In a recent Trulia survey,
							we found that five out of six respondents said
							finding the right neighborhood
						</p>
					</div>
				</div>
				<div>
					<div>
						<h1>2,500</h1>
						<p>Homes For Sale</p>
					</div>
					<div>
						<h1>5,000+</h1>
						<p>Homes Recently Sold</p>
					</div>
					<div>
						<h1>170+</h1>
						<p>Price Reduced</p>
					</div>
				</div>
			</div>
		</Wrapper>
	);
};
