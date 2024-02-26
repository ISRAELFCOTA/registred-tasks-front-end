import styled from "styled-components";
export const Container = styled.div`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.modalBackgroundColor};
`;

export const TaskWrapper = styled.div`
  flex-direction: row;
  align-items: center;
  display: flex;
  justify-content: space-between;
  gap: 0.75rem;
  margin-left: 1rem;
  margin-right: 1rem;
`;

export const TaskSeparator = styled.div`
  height: 2px;
  background-color: ${({ theme }) => theme.colors.modalBorderColor};
`;

export const TaskTitle = styled.h4`
  font-size: 1rem;
  font-weight: bold;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  gap: 0.75rem;
`;

export const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.buttonBackground};
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.3rem;
  height: 2.3rem;
  border: none;
  cursor: pointer;
  border-radius: 50%;
  transition: background-color 100ms linear;
  &:hover {
    background-color: ${({ theme }) => theme.colors.buttonBackgroundHover};
  }
  &:active {
    background-color: ${({ theme }) => theme.colors.buttonBackgroundActive};
  }
`;
