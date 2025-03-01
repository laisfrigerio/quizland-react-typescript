import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import styled from 'styled-components';

interface IAccordion {
  title: string;
  children: React.ReactNode;
  isOpen?: boolean;
  icon?: React.ReactNode;
}

const AccordionContainer = styled.div`
  background-color: transparent;
  box-shadow: ${({ theme }) => theme.colors.headerBoxShadow};
  border: 1px solid ${({ theme }) => theme.colors.headerBorderColor};
  border-radius: 4px;
  margin-bottom: 8px;
  overflow: hidden;
  width: 100%;
`;

const AccordionHeader = styled.div`
  display: flex;
  background-color: transparent;
  border-bottom: 1px solid ${({ theme }) => theme.colors.headerBorderColor};
  color: ${({ theme }) => theme.colors.themeText};
  cursor: pointer;
  justify-content: space-between;
  padding: 16px;
`;

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
`;

const AccordionContent = styled.div<{ isOpen: boolean }>`
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  padding: 24px;
  background-color: ${({ theme }) => theme.colors.white};
`;

function Accordion({ title, children, isOpen = false, icon }: IAccordion) {
  const [open, setOpen] = useState(isOpen);

  const toggleAccordion = () => {
    setOpen(!open);
  };

  return (
    <AccordionContainer>
      <AccordionHeader onClick={toggleAccordion}>
        <TitleContainer>
          {icon && <span style={{ marginRight: '8px' }}>{icon}</span>}
          {title}
        </TitleContainer>
        {open ? <FaChevronUp /> : <FaChevronDown />}
      </AccordionHeader>
      <AccordionContent isOpen={open}>
        {children}
      </AccordionContent>
    </AccordionContainer>
  );
}

export { Accordion };
