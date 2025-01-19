import styled from "styled-components";

const HeaderContainer = styled.header`
  background-color: ${({ theme }) => theme.colors.headerBg};
  box-shadow: ${({ theme }) => theme.colors.headerBoxShadow};
  height: 70px;
`;

function Header() {
  return (
    <HeaderContainer></HeaderContainer>
  );
}

export { Header };
