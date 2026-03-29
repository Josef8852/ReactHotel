import styled from "styled-components";
import useDarkMode from "../context/useDarkMode";
import { useState } from "react";

const StyledLogo = styled.div`
  text-align: center;
`;

const Img = styled.img`
  height: 18rem;
  width: auto;
`;

const Logo: React.FC = () => {
  
  const { isDarkMode } = useDarkMode();
  
  const [loaded , setLoaded] = useState<boolean>(false)
  
  return (
    <StyledLogo>
      <Img style={{display : loaded ? "inline-block" : "none"}} onLoad={() => setLoaded(true)} src={`${isDarkMode ? "LogoLight.png" : "LogoDark.png"}`} alt="Logo" />
    </StyledLogo>
  );
}

export default Logo;