import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  gap: 1rem;
`;

export const Input = styled.input`
  height: 3rem;
  padding-left: 1rem;
  width: 100%;
  border-radius: 0.5rem;
  background-color: ${({ theme }) => theme.colors.inputBackgroundColor};
  border: 1px solid ${({ theme }) => theme.colors.inputBorderColor};
  transition: border-color 100ms linear;

  &:focus {
    border-color: ${({ theme }) => theme.colors.inputBorderColorActive};
  }
`;
