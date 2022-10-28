import styled from "styled-components";
import { ArrowBtn } from "./common/arrowBtn";
import bed from "../img/bed.png";
import bath from "../img/bath.png";
import sqft from "../img/sqft.png";

import house1 from "../img/house1.png";
import house2 from "../img/house2.png";
import house3 from "../img/house3.png";

const Wrapper = styled.section`
	margin-top: 120px;
	background: #f5fafe;

	> div {
		padding: 110px 165px;
		display: block;
		justify-content: center;

		.info {
			margin-top: 15px;
			display: flex;
			justify-content: space-between;

			p {
				font-size: 16px;
				line-height: 30px;
				color: #5a6473;
			}
		}

		@media (max-width: 1000px) {
			padding: 110px 23px;
			> h2 {
				text-align: center;
			}

			.info {
				flex-direction: column;
				text-align: center;
			}
		}
	}
`;

const CardList = styled.div`
	display: flex;
	justify-content: space-between;
	margin: 68px auto 0 auto;
	padding-bottom: 34px;
	overflow: auto;
	max-width: 1140px;

	> div {
		border-radius: 5px;
		background: #fff;
		margin: 0 15px;
	}

	@media (max-width: 1000px) {
		margin-top: 34px;
	}
`;

const Content = styled.div`
	margin: 20px 0 24px 20px;

	h3 {
		color: #000339;
	}

	p {
		font-size: 14px;
		color: #a3a6ab;
		line-height: 21px;
		font-weight: 500;
		margin-top: 8px;
		margin-bottom: 21px;
	}
`;

const Img = styled.div`
	background-image: url(${p => p.Img});
	width: 350px;
	height: 227px;
	background-position: center center;
	background-repeat: no-repeat;
`;

const IconList = styled.div`
	display: flex;
	align-items: center;

	> div {
		margin: 0 11px;
		display: flex;
		align-items: center;
		label {
			margin-left: 8px;
			font-size: 14px;
			font-weight: 500;
			line-height: 14px;
		}
	}
`;

export const Featured = () => {
	return (
		<Wrapper>
			<div>
				<h2>Featured Properties</h2>
				<div className="info">
					<p>Everything you need to know when you're looking</p>
					<ArrowBtn
						displayText="View All Properties"
						fontSize="18px"
						lineHeight="27px"
					/>
				</div>
				<CardList>
					<div>
						<Img Img={house1} />
						<Content>
							<h3>$35,000</h3>
							<p>8502 Preston Rd. Inglewood, Maine 98280</p>
							<IconList>
								<div>
									<img src={bed} alt="bed" />
									<label>5 Beds</label>
								</div>
								<div>
									<img src={bath} alt="bath" />
									<label>2 Bath</label>
								</div>
								<div>
									<img src={sqft} alt="sqft" />
									<label>2,000 Sqft</label>
								</div>
							</IconList>
						</Content>
					</div>
					<div>
						<Img Img={house2} />
						<Content>
							<h3>$35,000</h3>
							<p>8502 Preston Rd. Inglewood, Maine 98280</p>
							<IconList>
								<div>
									<img src={bed} alt="bed" />
									<label>5 Beds</label>
								</div>
								<div>
									<img src={bath} alt="bath" />
									<label>2 Bath</label>
								</div>
								<div>
									<img src={sqft} alt="sqft" />
									<label>2,000 Sqft</label>
								</div>
							</IconList>
						</Content>
					</div>
					<div>
						<Img Img={house3} />
						<Content>
							<h3>$35,000</h3>
							<p>8502 Preston Rd. Inglewood, Maine 98280</p>
							<IconList>
								<div>
									<img src={bed} alt="bed" />
									<label>5 Beds</label>
								</div>
								<div>
									<img src={bath} alt="bath" />
									<label>2 Bath</label>
								</div>
								<div>
									<img src={sqft} alt="sqft" />
									<label>2,000 Sqft</label>
								</div>
							</IconList>
						</Content>
					</div>
				</CardList>
			</div>
		</Wrapper>
	);
};
