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
  background-color: #161616;

  border-radius: 0.5rem;
  border: 1px solid #363636;
`;

export const TasksWrapper = styled.div`
  width: 100%;
  flex-direction: column;
  display: flex;
  gap: 0.5rem;
`;

export const WrapperLogoTaskTitle = styled.div`
  flex-direction: row;
  display: flex;
  align-items: center;
  width: 100%;
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
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 0.6rem;
  padding-bottom: 0.6rem;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
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
`;

export const ButtonText = styled.h5`
  font-size: 1rem;
  font-weight: 600;
`;
