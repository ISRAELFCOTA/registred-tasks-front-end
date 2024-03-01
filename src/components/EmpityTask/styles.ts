import styled from "styled-components";

export const Container = styled.div`
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
  padding: 1rem;
`;

export const Title = styled.div`
  font-size: 1rem;
  font-weight: 600;
`;
