import { MouseEventHandler } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

interface IButton {
  className?: string;
  label: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  toPath?: string;
}

const ButtonContainer = styled.button`
  border-radius: 16px;
  cursor: pointer;
  font-weight: 600;
  padding: 12px 24px;

  &.primary {
    background-color: ${({ theme }) => theme.colors.primaryColor};
    color: ${({ theme }) => theme.colors.primaryColorTextButton};
  }

  &.secondary {
    background-color: ${({ theme }) => theme.colors.secondaryColor};
    color: ${({ theme }) => theme.colors.secondaryColorTextButton};
  }

  &.secondary-invert {
    background-color: inherit;
    border: 1px solid ${({ theme }) => theme.colors.primaryColor};
    color: ${({ theme }) => theme.colors.primaryColor};
  }
`;

function Button({ className, label, onClick, toPath, ...rest }: IButton) {
  if (toPath) {
    return (
      <ButtonContainer
        as={Link}
        to={toPath}
        className={className}
        {...rest}
      >
        {label}
      </ButtonContainer>
    );
  }

  return (
    <ButtonContainer
      onClick={onClick}
      type='button'
      className={className}
      {...rest}
      >
        {label}
    </ButtonContainer>
  );
};

export { Button };
