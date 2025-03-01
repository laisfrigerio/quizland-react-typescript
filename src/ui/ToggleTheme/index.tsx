import styled, { keyframes } from 'styled-components';

import { SunIcon } from '@icons/Sun';
import { MoonIcon } from '@icons/Moon';

interface IToggleTheme {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  id: string
  value: string
  checked: boolean
  currentTheme: string
};

const SlideOn = keyframes`
  0% {
    transform: translateX(0) scale(1);
  }
  50% {
    transform: translateX(15px) scale(1.1);
  }
  100% {
    transform: translateX(23px) scale(1);
  }
`;

const SlideOff = keyframes`
  0% {
    transform: translateX(23px) scale(1);
  }
  50% {
    transform: translateX(15px) scale(1.1);
  }
  100% {
    transform: translateX(0px) scale(1);
  }
`;

const ToggleLabel = styled.label`
  font-size: 16px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primaryText};
  display: flex;
  align-items: center;
  position: absolute;
  top: 24px;
  right: 25px;
`;

const ToggleInput = styled.input`
  visibility: hidden;
  border: 1px solid red;
  margin: 0;
  &:checked + span {
    background-color: ${({ theme }) => theme.colors.svgIconBg};
    svg {
      animation: ${SlideOn} 0.2s linear forwards;
    }
  }
  &:checked + span::after {
    animation: ${SlideOn} 0.2s linear forwards;
  }
`;

const Ball = styled.span`
  width: 52px;
  height: 26px;
  background-color: ${({ theme }) => theme.colors.svgIconBg};
  display: inline-block;
  cursor: pointer;
  border-radius: 50px;
  position: relative;
  svg {
    position: absolute;
    top: 5px;
    left: 7px;
    z-index: 1;
    animation: ${SlideOff} 0.2s linear forwards;
  }
  &::after {
    content: '';
    width: 21px;
    height: 21px;
    border-radius: 50%;
    display: inline-block;
    position: absolute;
    top: 3px;
    left: 5px;
    align-items: center;
    justify-content: center;
    animation: ${SlideOff} 0.2s linear forwards;
  }
  svg path {
    fill: ${({ theme }) => theme.colors.svgIconFill};
  }
`;

function ToggleTheme({ onChange, id, value, checked, currentTheme}: IToggleTheme) {
  return (
    <ToggleLabel htmlFor={id}>
      Theme:
      <ToggleInput
        type="checkbox"
        id={id}
        onChange={onChange}
        value={value}
        checked={checked}
        data-testid="test-toogle-theme-checkbox"
      />
      <Ball>{currentTheme === 'light' ? <SunIcon /> : <MoonIcon />}</Ball>
    </ToggleLabel>
  )
}

export { ToggleTheme };
