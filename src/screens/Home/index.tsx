import styled from 'styled-components';

import { AWSIcon } from '@icons/AWS';
import { Button } from '@ui/Button';

const MainContainer = styled.main`
  align-items: center;
  background: inherit;
  display: flex;
  flex-direction: row;
  height: auto;
  width: 100%;
`;

const SectionHero = styled.section`
  background: ${({ theme }) => theme.colors.white};
  height: auto;
  min-height: 400px;
  padding: 24px 8px 8px;
  width: 100%;
`;

const HeroWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  max-width: 768px;

  h1 {
    color: ${({ theme }) => theme.colors.primaryText};
    font-size: 32px;
    font-weight: 800;
    margin-top: 16px;
  }

   h2 {
    color: ${({ theme }) => theme.colors.secondaryColorText};
    font-size: 24px;
    font-weight: 600;
  }

  svg {
    height: 200px;
    max-width: 800px;
    width: 100%;

    path {
      fill: ${({ theme }) => theme.colors.secondaryColor};
    }
  }

  .btn__start {
    margin-top: 24px;
  }
`;

function HomeScreen() {
  return (
    <MainContainer>
      <SectionHero className='section-hero'>
        <HeroWrapper>
          <AWSIcon />
          <h1>AWS Cloud Practitioner</h1>
          <h2>Simulados gratuitos</h2>
          <Button
            toPath="/quiz" 
            label='Iniciar simulado'
            className='btn__start secondary'
            data-testid='btn-quiz-start'
          ></Button>
        </HeroWrapper>
      </SectionHero>
    </MainContainer>
  );
}
  
export { HomeScreen };
  