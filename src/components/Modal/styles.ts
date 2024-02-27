import styled from "styled-components";
export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.modalBackgroundColor};
  height: 100%;
  width: 100%;

  position: absolute;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const HeaderWrapper = styled.div`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  display: flex;
  padding: 1rem;
  width: 100%;
  border-bottom: 1px solid ${({ theme }) => theme.colors.modalBorderColor};
`;

export const Header = styled.h4`
  font-size: 1rem;
  font-weight: bold;
`;

export const ContentModal = styled.main`
  width: 30%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.modalContentBackgroundColor};
  border: 1px solid ${({ theme }) => theme.colors.modalBorderColor};
  border-radius: 0.5rem;
`;

export const Button = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1.3rem;
  height: 1.3rem;
  border: none;
  cursor: pointer;
  border-radius: 50%;
  transition: background-color 100ms linear;

  &:active {
    background-color: ${({ theme }) => theme.colors.buttonBackgroundActive};
  }
`;

export const Content = styled.div`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  display: flex;
  padding: 1rem;
  width: 100%;
`;

export const WrapperTask = styled.div`
  padding: 1rem;
`;

export const InputWrapper = styled.div`
  justify-content: center;
  display: flex;
`;

export const InputHeaderWrapper = styled.div`
  justify-content: center;
  display: flex;
  margin-bottom: 1rem;
`;

export const InputHeaderTitle = styled.h5`
  font-size: 1rem;
  font-weight: 500;
`;

export const Input = styled.input`
  padding: 0.7rem;
  border-radius: 0.5rem;
  border: 1px solid ${({ theme }) => theme.colors.textSecondary};
`;

export const Footer = styled.div`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  display: flex;
  padding: 1rem;
  width: 100%;
  border-top: 1px solid ${({ theme }) => theme.colors.modalBorderColor};
`;

export const ButtonSave = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20%;
  height: 2rem;
  border: none;
  cursor: pointer;
  border: 0.1rem solid ${({ theme }) => theme.colors.modalBorderColor};
  border-radius: 0.3rem;
  transition: background-color 100ms linear;
  &:hover {
    background-color: ${({ theme }) => theme.colors.lightMain};
  }
  &:active {
    background-color: ${({ theme }) => theme.colors.buttonBackgroundActive};
  }
`;

export const ButtonText = styled.h5`
  font-size: 1rem;
  font-weight: 300;
`;
