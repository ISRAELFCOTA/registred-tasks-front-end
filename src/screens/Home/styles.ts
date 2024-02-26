import styled from "styled-components";
export const Container = styled.div`
  flex: 1;
`;

export const HeaderWrapper = styled.div`
  padding: 0.25rem;
  margin: 1.5rem;
`;
export const HeaderTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: bold;
`;

export const ShowTasksWrapper = styled.div`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.modalBackgroundColor};
  border-top: 0.1rem solid ${({ theme }) => theme.colors.modalBorderColor};
  border-left: 0.1rem solid ${({ theme }) => theme.colors.modalBorderColor};
  border-right: 0.1rem solid ${({ theme }) => theme.colors.modalBorderColor};
  border-radius: 5px 5px 0 0;
  margin: 1.5rem;
`;

export const ShowTasksHeader = styled.div`
  margin-left: 1rem;
  flex-direction: row;
  align-items: center;
  display: flex;
  gap: 0.75rem;
`;

export const ShowTasksHeaderTitle = styled.h3`
  font-size: 1rem;
  font-weight: bold;
`;
