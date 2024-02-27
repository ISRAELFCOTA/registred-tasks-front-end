import styled from "styled-components";
export const Container = styled.div`
  padding: 1rem;
`;

export const HeaderWrapper = styled.div`
  margin-bottom: 1rem;
`;
export const HeaderTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: bold;
`;

export const Logo = styled.img`
  width: 2.5rem;
  height: 2.5rem;
`;

export const ShowTasksWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.modalBackgroundColor};
  border-top: 0.1rem solid ${({ theme }) => theme.colors.modalBorderColor};
  border-left: 0.1rem solid ${({ theme }) => theme.colors.modalBorderColor};
  border-right: 0.1rem solid ${({ theme }) => theme.colors.modalBorderColor};
  border-top-left-radius: 0.5rem;
  border-top-right-radius: 0.5rem;
`;

export const WrapperLogoTaskTitle = styled.div`
  flex-direction: row;
  display: flex;
  align-items: center;
  width: 100%
`;

export const ShowTasksHeader = styled.div`
  padding: 1rem;
  border-bottom: 0.1rem solid ${({ theme }) => theme.colors.modalBorderColor};
  flex-direction: row;
  align-items: center;
  display: flex;
  gap: 0.75rem;
  justify-content: space-between;
`;

export const ShowTasksHeaderTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: bold;
`;

export const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.buttonBackground};
  width: 2rem;
  height: 2rem;
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
