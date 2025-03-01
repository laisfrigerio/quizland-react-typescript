import styled from 'styled-components';

const HeaderContainer = styled.header`
  background-color: transparent;
  box-shadow: ${({ theme }) => theme.colors.headerBoxShadow};
  height: 80px;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
`;

function Header() {
  return (
    <HeaderContainer>
      <div></div>
    </HeaderContainer>
  )
}

export { Header };
