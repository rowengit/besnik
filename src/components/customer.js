import { Logo } from "./common/logo";
import styled from "styled-components";
import { Star } from "./icons/star";

import Meundies from "../img/custMeundies.png";
import Slack from "../img/custSlack.png";
import Amazon from "../img/custAmazon.png";
import Woocommerce from "../img/custWoocommerce.png";
import Sitepoint from "../img/custSitepoint.png";

const Wrapper = styled.section`
	margin-top: 79px;
	p {
		font-size: 16px;
		line-height: 20px;
		font-weight: 500;
	}

	> div > section {
		display: flex;
		&:first-child {
			justify-content: space-between;
			padding: 56px;
			img + p {
				margin-top: 17.85px;
			}

			svg + p {
				margin-top: 23px;
			}

			> div:last-child {
				text-align: right;
			}
		}

		&:last-child {
			padding: 70px;
			text-align: center;
			justify-content: center;
			a {
				margin: 0.5rem;
				display: inline-block;
				&.meundies {
					background-image: url(${Meundies});
				}

				&.slack {
					background-image: url(${Slack});
				}
				&.amazon {
					background-image: url(${Amazon});
				}
				&.woocommerce {
					background-image: url(${Woocommerce});
				}
				&.sitepoint {
					background-image: url(${Sitepoint});
				}

				background-position: center center;
				background-repeat: no-repeat;
				min-width: 180px;
				height: 64px;

				transition: box-shadow 0.25s linear;

				&:hover {
					border-radius: 6px;
					box-shadow: 3px 3px 9px rgba(0, 0, 0, 0.2);
				}
			}

			@media (max-width: 1000px) {
				display: block;
			}
		}
	}
`;

export const Customer = () => {
	return (
		<Wrapper>
			<div>
				<section>
					<div>
						<Logo />
						<p>More than 45,000+ companies trust besik</p>
					</div>
					<div>
						<Star />
						<Star />
						<Star />
						<Star />
						<Star />
						<p>5 Star Ratings (2k+ Review)</p>
					</div>
				</section>
				<section>
					<a className="meundies" />
					<a className="slack" />
					<a className="amazon" />
					<a className="woocommerce" />
					<a className="sitepoint" />
				</section>
			</div>
		</Wrapper>
	);
};
