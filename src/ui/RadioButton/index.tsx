import { ChangeEventHandler } from 'react';
import styled from 'styled-components';

interface IRadioButton {
  id: string;
  checked: boolean;
  label: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
};

const Label = styled.label`
  border: 1px solid ${({ theme }) => theme.colors.primaryColor};
  border-radius: 4px;
  cursor: pointer;
  display: block;
  font-size: 18px;
  margin-bottom: 16px;
  padding: 12px 12px 12px 52px;
  position: relative;
  user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  width: 100%;

  .radio-inner {
    left: 12px;
    height: 100%;
    position: absolute;
    top: 0;

    .radio-inner__radio {
      background-color: ${({ theme }) => theme.colors.gray200};
      border-radius: 50%;
      height: 30px;
      width: 30px;
    }
  }

  .radio-inner__flex {
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
  }

  &:hover .radio-button__input ~ .radio-inner .radio-inner__radio {
    background-color: ${({ theme }) => theme.colors.gray450};
  }

  .radio-button__input:checked ~ .radio-inner .radio-inner__flex .radio-inner__radio {
    background-color: ${({ theme }) => theme.colors.primaryColor};
  }

  .radio-button__input:checked ~ .radio-inner__radio:after {
    display: block;
  }

  &:after {
    content: "";
    display: none;
    position: absolute;
  }

  .radio-inner__radio:after {
    left: 9px;
    top: 5px;
    width: 5px;
    height: 10px;
    border: solid ${({ theme }) => theme.colors.white};
    border-width: 0 3px 3px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }
`;

const Input = styled.input`
  cursor: pointer;
  height: 0;
  position: absolute;
  opacity: 0;
  width: 0;
`;

function RadioButton({ id, checked = false, label, onChange }: IRadioButton) {
  return (
    <Label>
      {label}
      <Input
        className='radio-button__input'
        onChange={onChange}
        type='radio'
        name='option'
        value={id}
        checked={checked}
      />
      <div className='radio-inner'>
        <div className='radio-inner__flex'>
          <div className='radio-inner__radio'></div>
        </div>
      </div>
    </Label>
  );
}

export { RadioButton };
