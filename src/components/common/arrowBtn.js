import styled from "styled-components";
import { ReactComponent as Arrow } from "../icons/arrow.svg";

const Styled = styled.a`
	font-weight: 600;
	font-size: ${p => p.FontSize};
	line-height: ${p => p.LineHeight};
	text-align: center;
	color: #0689ff;
`;

export const ArrowBtn = ({
	displayText,
	fontSize = "14px",
	lineHeight = "31px"
}) => (
	<Styled FontSize={fontSize} LineHeight={lineHeight}>
		{displayText} <Arrow />
	</Styled>
);
