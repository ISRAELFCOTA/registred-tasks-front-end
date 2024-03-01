import styled, { css } from "styled-components";
type Props = {
  bgColor: string;
  isSelect: boolean;
};
export const Button = styled.button<Props>`
  background-color: ${({ bgColor }) => bgColor};
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  padding-left: 1rem;
  padding-right: 1rem;
  border: none;
  cursor: pointer;
  border-radius: 0.5rem;
  gap: 1rem;
  transition: opacity 100ms linear;
  &:active {
    opacity: 0.5;
  }
  &:hover {
    opacity: 0.75;
  }
  ${({ isSelect }) =>
    isSelect &&
    css`
      transition: transform 50ms linear;
      transform: scale(1.3);
    `}
`;

export const Label = styled.p<{ color: string }>`
  font-weight: 600;
  color: ${({ color }) => color};
`;
