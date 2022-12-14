import LogoPng from "../../img/logo.png";
import styled from "styled-components";

const Wrapper = styled.img`
	width: 107px;
	height: 24px;
	cursor: pointer;
`;

export const Logo = () => <Wrapper src={LogoPng} alt="Logo" />;
