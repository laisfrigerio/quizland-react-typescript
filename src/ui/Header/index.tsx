import styled from 'styled-components';

const HeaderContainer = styled.header`
  background-color: ${({ theme }) => theme.colors.headerBg};
  height: 80px;
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
