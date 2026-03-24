import styled from "styled-components";
import useDarkMode from "../context/useDarkMode";

const StyledLogo = styled.div`
  text-align: center;
`;

const Img = styled.img`
  height: 18rem;
  width: auto;
`;

const Logo: React.FC = () => {
  
  const { isDarkMode } = useDarkMode();
  
  return (
    <StyledLogo>
      <Img src={`${isDarkMode ? "LogoLight.png" : "LogoDark.png"}`} alt="Logo" />
    </StyledLogo>
  );
}

export default Logo;