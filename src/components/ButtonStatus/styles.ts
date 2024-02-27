import styled from "styled-components";

export const Button = styled.button<{ color: string }>`
  background-color: ${({ color }) => color};
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1rem;
  height: 1rem;
  border: none;
  cursor: pointer;
  border-radius: 50%;
`;
