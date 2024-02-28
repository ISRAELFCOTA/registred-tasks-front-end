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
  width: 35rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.modalContentBackgroundColor};
  border: 1px solid ${({ theme }) => theme.colors.modalBorderColor};
  border-radius: 0.5rem;
  @media (max-width: 1024px) {
    width: 30rem;
  }
  @media (max-width: 768px) {
    width: 25rem;
  }
  @media (max-width: 512px) {
    width: 20rem;
  }
  @media (max-width: 408px) {
    width: 16rem;
  }
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
  width: 100%;
  gap: 0.5rem;
  display: flex;
  flex-direction: column;
`;

export const InputHeaderTitle = styled.h5`
  font-size: 1rem;
  font-weight: 500;
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

export const Footer = styled.div`
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
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
  cursor: pointer;
  border: 1px solid ${({ theme }) => theme.colors.modalBorderColor};
  border-radius: 0.3rem;
  transition: background-color 50ms linear;
`;

export const ButtonText = styled.h5`
  font-size: 1rem;
  font-weight: 300;
`;
