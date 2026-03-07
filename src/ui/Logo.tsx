import styled from "styled-components";

const StyledLogo = styled.div`
  text-align: center;
`;

const Img = styled.img`
  height: 18rem;
  width: auto;
`;

const Logo:React.FC = () => {
  return (
    <StyledLogo>
      <Img src="/LogoDark.png" alt="Logo" />
    </StyledLogo>
  );
}

export default Logo;